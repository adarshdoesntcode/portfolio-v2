import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

async function handler(req, res) {
  try {
    const book = await getCurrentlyReading();
    // const sketch = await getLatestSketch();
    res.json(book);
  } catch (error) {
    console.log(error);
  }
}

export const getCurrentlyReading = async () => {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
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
      database_id: "599cc4e4509343dc8622d1346c9c981f",
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

export default handler;
