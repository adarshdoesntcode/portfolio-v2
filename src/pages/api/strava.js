import { client } from "./spotify";

const getTokens = async () => {
  let STRAVA_ACCESS_TOKEN = await client.get("STRAVA_ACCESS_TOKEN");

  if (!STRAVA_ACCESS_TOKEN) {
    STRAVA_ACCESS_TOKEN = await refreshToken();
  }
  process.env.STRAVA_ACCESS_TOKEN = STRAVA_ACCESS_TOKEN;
};

export const getActivities = async () => {
  await getTokens();
  let returnData;
  try {
    const response = await fetch(
      "https://www.strava.com/api/v3/athlete/activities",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + process.env.STRAVA_ACCESS_TOKEN,
        },
      },
    );

    if (response.status !== 401) {
      const data = await response.json();

      const filteredData = data.filter((ride) => ride.type === "Ride");

      returnData = {
        distance: filteredData[0].distance,
        moving_time: filteredData[0].moving_time,
        type: filteredData[0].type,
        average_speed: filteredData[0].average_speed,
        start_date_local: filteredData[0].start_date_local,
      };
    }
  } catch (e) {
    console.log(e);
  }

  return returnData;
};

const refreshToken = async () => {
  let accessToken;
  try {
    const response = await fetch("https://www.strava.com/api/v3/oauth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `client_id=${process.env.STRAVA_CLIENT_ID}&client_secret=${process.env.STRAVA_CLIENT_SECRET}&grant_type=refresh_token&refresh_token=${process.env.STRAVA_REFRESH_TOKEN}`,
    });
    const data = await response.json();

    accessToken = data.access_token;
    await client.set(
      "STRAVA_ACCESS_TOKEN",
      data.access_token,
      "EX",
      data.expires_in - 5,
    );
    process.env.STRAVA_REFRESH_TOKEN = data.refresh_token;
  } catch (error) {
    console.log(error);
  }
  return accessToken;
};

async function handler(req, res) {
  const data = await getActivities();
  res.status(200).json(data);
}

export default handler;
