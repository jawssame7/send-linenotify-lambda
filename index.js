import axios from "axios";

const url = process.env.LINE_NOTIFY_URL;
const accessToken = process.env.LINE_NOTIFY_ACCESS_TOKEN;


export const handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(event),
  };
  try {
    if (!event) {
      console.warn('Event is undefined!!!!!', event);
      return response;
    }
    const body = JSON.parse(event.body);
    if (!body) {
      return response;
    }
    const message = body.message;
    if (!message) {
      return response;
    }
    await axios.post(
      url,
      {
        message
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer ' + accessToken
        }
      });
  } catch (error) {
    console.error('Error:', error);
  } finally {

  }

  return response;
};

await handler();