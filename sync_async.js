// ASynchronous Program
console.log("Before");
getUser(1, (user) => {
    getRepos(user.username, (repos) => {
        getCommits1(repos[0], (commits) => {
        }) 
    }) 
});
console.log("After");

// Synchronous Program
console.log("Before");
const user = getUser(1)
const repos = getRepos1(user.username)
const commits = getCommits(repos[0])
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