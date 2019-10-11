const fs = require('fs');
const request = require("request");

const options = { method: 'GET',
  url: 'http://qa-interview-test.qa.splytech.io/api/drivers',
  qs: { latitude: '51.5049375', longitude: '-0.0964509', count: '2' }
};



request(options, function (error, response, body) {
  if (error) throw new Error(error);

  fs.writeFile('data.json', body, (err) => {
    if (err) throw err;
  });

});

