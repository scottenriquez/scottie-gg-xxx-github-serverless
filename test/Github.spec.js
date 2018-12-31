const expect = require('chai').expect;
const githubService = require('../services/Github');

describe('GitHub service', async () => {
   it('should get all of my public repos', async () => {
       //act
       const publicRepos = await githubService.getPublicRepos();

       //assert
       expect(publicRepos).to.not.be.null;
       publicRepos.forEach((repo, index) => {
           expect(repo.private).to.equal(false);
       });
   });
});