const Octokit = require('octokit');

getPublicRepos = async () => {
    return new Promise((fulfill, reject) => {
        const githubClient = Octokit.new({
            token: process.env.GITHUB_API_KEY
        });
        const scottenriquez = githubClient.getUser('scottenriquez');
        scottenriquez.getRepos().then((repos) => {
            fulfill(repos);
        });
    });
};

module.exports = {getPublicRepos};