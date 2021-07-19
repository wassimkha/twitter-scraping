const request = require('request');
const {parse_description} = require("./parser");
const config = require("./config.json")

const fetch_users = (id) => {
    return new Promise(resolve => {
        const options = {
            'method': 'GET',
            'url': `https://api.twitter.com/2/users/${id}/following?user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld`,
            'headers': {
                'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAADwaRwEAAAAARz4XCsEZgvD6Ft1nwG7GQBsmnME%3D7mifUF5QqR6LNbODUu2qXzUQGMwyxGps3uLshR3On2tKZpkyUw',
                'Cookie': 'guest_id=v1%3A162655653130695755; personalization_id="v1_YwKC9RqWq4cIsXes49kzjQ=="'
            }
        };
        const res_array = []
        request(options, (error, response) => {
            if (error) console.log(error);
            if (response && response.body) {
                const res = JSON.parse(response.body);
                if (res && res.data) {
                    res.data.forEach(user => {
                        if (parse_description(config.keywords, user["description"])) {
                            const urls = []
                            if (user["entities"] && user["entities"]["url"] && user["entities"]["url"]["urls"]) {
                                user["entities"]["url"]["urls"].forEach(url => {
                                    urls.push(url["expanded_url"])
                                })
                            }
                            if (user["url"]) {
                                urls.push(user["url"])
                            }
                            res_array.push({
                                name: user["name"],
                                username: user["username"],
                                description: user["description"],
                                profile_image_url: user["profile_image_url"],
                                location: user["location"],
                                twitter_id: user["id"],
                                urls,
                                following_count: user["public_metrics"]["following_count"],
                                followers_count: user["public_metrics"]["followers_count"],
                                tweet_count: user["public_metrics"]["tweet_count"],
                                visited: false
                            })

                        }
                    })
                }
            }
            resolve(res_array);
        });

    })

}

exports.fetch_users = fetch_users;
