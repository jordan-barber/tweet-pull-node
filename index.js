const Twitter = require('twitter');
const fs = require('fs');

const Twit = new Twitter({
    consumer_key: 'XXX',
    consumer_secret: 'XXX',
    access_token_key: 'XXX',
    access_token_secret: 'XXX'
});

const count = 50;

Twit.get('statuses/user_timeline', { screen_name: 'XXX', count: count }, function(error, tweets, response) {
    if (error) {
        console.log(error)
    }

    for (var i = 0; i < count; i++) {
        fs.appendFile('output/tweets.txt', tweets[i].text + '\n', function(err) {
            if (err) {
                console.log('ERROR!' + err);
            }
        });
        console.log(tweets[i].text);
    }
});

