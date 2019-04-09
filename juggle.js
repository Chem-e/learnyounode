let http = require('http'),
    urls = process.argv.slice(2),
    results = {},
    count = 0;


let print = function () {

    let i;
    for (i = 0; i < 3; ++i) {
        console.log(results[i]);
    }
};


let task = function (i) {

    return function (response) {

        let data = '';
        response.setEncoding('utf8');
        response.on('error', console.error);
        response.on('data', function (d) {

            data += d;
        });

        response.on('end', function () {

            results[i] = data;
            count += 1;
            if (count === 3) {
                print();
            }
        });
    };
};


urls.forEach(function (url, i) {

    http.get(url, task(i));
});