#! /usr/bin/env node

const core = require('@actions/core');
const github = require('@actions/github');

try {
    const repo = core.getInput('repo');
    const groups = core.getInput('groups');
    const branch = core.getInput('branch');
    const prTitle = core.getInput('pr-title');
    const prUrl = core.getInput('pr-url');

    var pos = branch.indexOf('/');
    var branchGroup = branch.substring(0, pos);
    var title = branch.substring(pos+1);

    var type = '';

    console.log(groups)

    groups.split(',').forEach(function(group) {
        console.log(group)
        if (branchGroup.toUpperCase() == group.toUpperCase()) {
            type = group;
        }
    });

    var subject = `Pull request to add a new design ${type} to ${repo}`;
    var body = `A pull request to add a new design ${type} "${title}"qq  has been made.\n\n` +
                `PR Title: ${prTitle}\n\n` +
                `View Here: ${prUrl}`;

    core.setOutput('subject', subject);
    core.setOutput('body', body);

} catch (error) {
    console.error(error.message);
    core.setFailed(error.message);
}