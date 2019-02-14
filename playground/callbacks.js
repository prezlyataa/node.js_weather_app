let getUser = (id, callback) => {
    let user = {
        name: 'Yurii'
    };
    setTimeout(() => {
        callback(user);
    }, 2000);
};

getUser(32, user => {
    console.log(user);
});
