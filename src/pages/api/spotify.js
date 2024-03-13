import Redis from "ioredis";

export const client = new Redis(process.env.REDIS_URL);

const getTokens = async () => {
  let SPOTIFY_ACCESS_TOKEN = await client.get("SPOTIFY_ACCESS_TOKEN");

  if (!SPOTIFY_ACCESS_TOKEN) {
    SPOTIFY_ACCESS_TOKEN = await refreshToken();
  }
  process.env.SPOTIFY_ACCESS_TOKEN = SPOTIFY_ACCESS_TOKEN;
};

const refreshToken = async () => {
  let accessToken;

  const authOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(
          process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET_ID,
        ).toString("base64"),
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.REFRESH_TOKEN,
    }),
  };

  try {
    const response = await fetch(
      "https://accounts.spotify.com/api/token",
      authOptions,
    );
    const body = await response.json();

    if (!response.ok) {
      throw new Error(`Failed to refresh token: ${body.error}`);
    }

    accessToken = body.access_token;
    await client.set(
      "SPOTIFY_ACCESS_TOKEN",
      body.access_token,
      "EX",
      body.expires_in - 5,
    );
  } catch (error) {
    console.error("Error refreshing token:", error.message);
  }

  return accessToken;
};

const fetchSpotify = async (URL, TOKEN) => {
  let response;
  try {
    response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + TOKEN,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  } finally {
    return response;
  }
};

async function handler(req, res) {
  const data = await getPlayerState();
  res.json(data);
}

export async function getPlayerState() {
  await getTokens();
  let responseData;
  let current_response;
  let recent_response;
  try {
    current_response = await fetchSpotify(
      "https://api.spotify.com/v1/me/player/currently-playing",
      process.env.SPOTIFY_ACCESS_TOKEN,
    );

    if (current_response.status === 204) {
      recent_response = await fetchSpotify(
        "https://api.spotify.com/v1/me/player/recently-played",
        process.env.SPOTIFY_ACCESS_TOKEN,
      );

      const data = await recent_response.json();
      const recentTrack = data.items[0].track;

      responseData = {
        trackTitle: recentTrack.name,
        artists: recentTrack.artists.map((artist) => artist.name),
        trackLink: recentTrack.external_urls.spotify,
        trackAudio: recentTrack.preview_url,
        trackImage: recentTrack.album.images[0],
        isPlaying: false,
        status: 200,
      };
    }

    if (current_response.status !== 204) {
      const data = await current_response.json();

      if (data.currently_playing_type === "episode") {
        recent_response = await fetchSpotify(
          "https://api.spotify.com/v1/me/player/recently-played",
          process.env.SPOTIFY_ACCESS_TOKEN,
        );
        const data = await recent_response.json();
        const recentTrack = data.items[0].track;
        responseData = {
          trackTitle: recentTrack.name,
          artists: recentTrack.artists.map((artist) => artist.name),
          trackLink: recentTrack.external_urls.spotify,
          trackAudio: recentTrack.preview_url,

          trackImage: recentTrack.album.images[0],

          isPlaying: false,
          status: 200,
        };
      } else {
        responseData = {
          trackTitle: data.item.name,
          artists: data.item.artists.map((artist) => artist.name),
          trackLink: data.item.external_urls.spotify,
          isPlaying: true,
          trackAudio: data.item.preview_url,
          trackImage: data.item.album.images[0],
          status: 200,
        };
      }
    }
  } catch (e) {
    console.log(e);
  } finally {
    return responseData;
  }
}

export default handler;
