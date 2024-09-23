import axios from "axios";

const url = process.env.LINE_NOTIFY_URL;
const accessToken = process.env.LINE_NOTIFY_ACCESS_TOKEN;


export const handler = async (event) => {

    try {
        const message = JSON.parse(event.body);
        // const message = 'test lambda 111111';

        const postMsg = await axios.post(
            url,
            {
                message
            },
            {headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer ' + accessToken
                }});
    } catch (error) {
        console.error('Error:', error);
    } finally {

    }
};

await handler();