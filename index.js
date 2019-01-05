const githubService = require('./services/Github');

exports.handler = async (event) => {
    const publicRepos = await githubService.getPublicRepos();
    return JSON.stringify(publicRepos);
};
