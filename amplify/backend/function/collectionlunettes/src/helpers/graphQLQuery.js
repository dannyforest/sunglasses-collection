const axios = require('axios');

exports.graphQLQuery = (query, variables) =>
    axios({
        url: 'https://fv62y3eiczb2xm4k5ziocq3sly.appsync-api.us-east-1.amazonaws.com/graphql',
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": 'da2-mg2tuxtoifhabgldyb7sxfi62u',
        },
        data: {
            query, variables
        },
    });
