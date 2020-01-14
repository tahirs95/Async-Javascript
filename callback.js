// ASynchronous Program
console.log("Before");
getUser(1, repos);
console.log("After");

function repos(user){
    getRepos(user.username, commits)
}

function commits(repos){
    getCommits(repos[0], displayCommits);
}

function displayCommits(commits){
    console.log(commits);
}

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

function getCommits(repo, callback){
    setTimeout(() => {
        callback(["1", "2", "3"]);
    }, 2000)
}