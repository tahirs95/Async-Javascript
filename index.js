// ASynchronous Program
console.log("Before");
console.log("After");

// Promise Based Approach
// getUser(1)
//     .then(user => getRepos(user.username))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log(commits))
//     .catch(err => console.log(err.message));

// Async and Await Approach
async function displayRepos(){
    try{
        user = await getUser(1);
        repos = await getRepos(user.username);
        console.log(repos);
    }
    catch(err){
        console.log('Error:', err.message);
    }
    
}

displayRepos()

function getUser(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Reading a user from database.");
            resolve({id:id, username:"tahirs95"});
        }, 2000)
    });
}

function getRepos(username){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching Repos.");
            // resolve(["repo1", "repo2", "repo3"]);
            reject(new Error("Couldn't get repos"))
        }, 2000)
    });
}

function getCommits(repo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching commits.");
            resolve(["1", "2", "3"]);
        }, 2000)
    });
}