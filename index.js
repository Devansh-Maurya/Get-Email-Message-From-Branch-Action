#! /usr/bin/env node

const core = require('@actions/core');
const github = require('@actions/github');

try {
    const repo = core.getInput('repo-name');
    const branch = core.getInput('branch-name');
    const prTitle = core.getInput('pr-title');
    const prUrl = core.getInput('pr-url')

    console.log(`Branch: ${branch}`);

    var pos = branch.indexOf('/');
    var tag = branch.substring(0, pos);
    var title = branch.substring(pos+1);

    var type = '';
    if (tag.toUpperCase() == 'pattern'.toUpperCase()) {
        type = 'pattern';
    } else if (tag.toUpperCase() == 'principle'.toUpperCase()) {
        type = 'principle';
    }

    var subject = `Pull request to add a new design ${type} to ${repo}`;
    var body = `A pull request to add a new design ${type} "${title}" has been made.\n\n` +
                `PR Title: ${prTitle}\n\n` +
                `View Here: ${prUrl}`;

    core.setOutput('subject', subject);
    core.setOutput('body', body);

} catch (error) {
    console.error(error.message);
    core.setFailed(error.message);
}