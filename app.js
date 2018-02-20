BFandGFbot();

function BFandGFbot() {
    var cron = require('cron');
    var Twit = require('twit');
    var T = new Twit({
        consumer_key: 'BIEEqyHkSr3qxK11aLw7rgddB',
        consumer_secret: 'a0JDen2m2xoQMy0UbA2IKee1IK2zXRwHF9Ijl7bf20okjAkOcB',
        access_token: '964025848981581824-zuGTQdeWZh7yFLo5SvC3oAUOPmwabTp',
        access_token_secret: 't8hlB0enEksOGfboLeifnTgZqdzJcUCdn1H8Cj2YWxHBn',
    });

    var date = new Date();

    var job = new cron.CronJob({
        cronTime: '00 00 6 19 Feb *',
        onTick: function () {
            var year = date.getFullYear();

            var message = "GF and BF have been dating for " + (year - 2016) + " years.";

            T.post('statuses/update', { status: message }, function (err, data, response) {
                console.log(data);
            });
        },
        start: false,
        timeZone: "America/New_York"

    });
    job.start();



}

