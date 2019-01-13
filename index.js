const githubService = require('./services/Github');

exports.handler = async (event) => {
    return await githubService.getPublicRepos();
};
