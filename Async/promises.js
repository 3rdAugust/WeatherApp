const somePromises = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('OK');
    }, 500);

});

somePromises.then((message) => {
    console.log('Success', message);
}, (errorMessage) => {
  console.log('Error', errorMessage);
})
