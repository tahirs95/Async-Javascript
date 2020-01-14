const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(22)
        reject(new Error('message'));
    }, 2000)
});

p
.then(result => console.log(result))
.catch(err => console.log(err.message));