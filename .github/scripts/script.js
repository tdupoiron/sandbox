const { Octokit } = require("@octokit/rest");
const github = new Octokit({
    auth: process.env.GITHUB_TOKEN,
});

github.rest.issues.createComment({
    issue_number: context.issue.number,
    owner: context.repo.owner,
    repo: context.repo.repo,
    body: "🎉 You've created this issue comment using GitHub Script!!!"
})