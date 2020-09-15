const core = require('@actions/core');

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

    groups.split(',').forEach(function(group) {
        if (branchGroup.toUpperCase() == group.toUpperCase()) {
            type = group;
        }
    });

    var subject = `Pull request to add a new ${type} to ${repo}`;
    var body = `A pull request to add a new ${type} "${title}" has been made.\n\n` +
                `PR Title: ${prTitle}\n\n` +
                `View Here: ${prUrl}`;

    core.setOutput('subject', subject);
    core.setOutput('body', body);

} catch (error) {
    console.error(error.message);
    core.setFailed(error.message);
}