// Synchronous Program
console.log("Before");
user1_name = getUser(1, (user) => {
    console.log(user);
    getRepos(user.username, (repos) => {
        console.log(repos)
        return repos
    })
});

console.log("After");

// Callback
// Promises
// async/await

function getUser(id, callback){
    setTimeout(() => {
        console.log("Reading a user from database.");
        callback({id:id, username:"tahirs95"});
    }, 2000)
}

function getRepos(username, callback){
    setTimeout(() => {
        callback(["repo1", "repo2", "repo3"]);
    }, 2000)
}