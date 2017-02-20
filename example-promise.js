// Callback example
function getTempCallback (location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('Philadelphia', function (err, temp) {
  if (err) {
    console.log('FAILURE:', err)
  } else {
    console.log('SUCCESS:', temp)
  }
});

// Promise example
function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      if (location === 'Philadelphia') {
        resolve(79);
      } else {
        reject('City not found');
      }
    }, 2000);
  });
}

getTempPromise('Philadelphia').then(function (temp) {
  console.log('Promise SUCCESS:', temp);
}, function (err) {
  console.log('Promise FAILURE:', err);
});
