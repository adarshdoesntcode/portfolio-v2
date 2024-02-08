import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

async function handler(req, res) {
  try {
    const book = await getCurrentlyReading();

    res.json(book);
  } catch (error) {
    console.log(error);
  }
}

export const getCurrentlyReading = async () => {
  try {
    const response = await notion.databases.query({
      database_id: process.env.BOOK_DATABASE_ID,
      filter: {
        property: "Status",
        status: {
          equals: "Reading",
        },
      },
      sorts: [
        {
          timestamp: "last_edited_time",
          direction: "descending",
        },
      ],
    });

    if (response.results.length === 0) {
      return {
        status: "Not Found",
      };
    } else {
      const data = response.results[0].properties;
      return {
        status: "success",
        bookTitle: data["Name"].title[0].plain_text,
        bookAuthor: data["Author"].rich_text[0].plain_text,
        totalPages: data["Total Pages"].number,
        currentPage: data["Current Page"].number,
        coverUrl: data["Cover"].files[0].external.url,
      };
    }
  } catch (error) {
    console.log(error);
  }
};

export const getLatestSketch = async () => {
  try {
    const response = await notion.databases.query({
      database_id: process.env.SKETCH_DATABASE_ID,
    });

    if (response.results.length === 0) {
      return {
        status: "Not Found",
      };
    } else {
      const data = response.results[0].properties;
      let filterdData = {
        width: data.width.number,
        height: data.height.number,
        Image: data.optimizedurl.url,
      };

      return filterdData;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getLatestProjects = async () => {
  try {
    const response = await notion.databases.query({
      database_id: process.env.PROJECT_DATABASE_ID,
      sorts: [
        {
          timestamp: "last_edited_time",
          direction: "descending",
        },
      ],
    });

    let data = response.results.map((res) => {
      return {
        name: res.properties.Name.title[0].plain_text,
        stack: res.properties.Stack.rich_text[0].plain_text.split(","),
        link: res.properties.Link.rich_text[0].href,
        year: res.properties.Year.rich_text[0].plain_text,
      };
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default handler;
