const githubService = require('./services/Github');

exports.handler = async (event) => {
    const publicRepos = await githubService.getPublicRepos();
    const response = {
        statusCode: 200,
        body: JSON.stringify(publicRepos),
    };
    return response;
};
