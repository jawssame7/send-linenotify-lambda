const axios = require('axios');

// const url = process.env.LINE_NOTIFY_URL;
// const accessToken = process.env.LINE_NOTIFY_ACCESS_TOKEN;
//
// const url = 'https://notify-api.line.me/api/notify';
// const accessToken = 'Fbii1czRfucUJqlMTJHx0rJe1kJsFHu97PkaSMQOhBZ';


const handle = async (event) => {

    const message = JSON.parse(event.body);
    // const message = 'test';

    const postMsg = await axios.post(
        url,
        {
            message
        },
        {headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + accessToken
        }})
};

handle();