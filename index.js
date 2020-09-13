const core = require('@actions/core');
const github = require('@actions/github');

try {
    const branch = core.getInput('branch-name');
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

    var prTitle = core.getInput('pr-title');
    var prUrl = core.getInput('pr-url')

    var body = `A request for a new design ${type}: ${title} has been made\n\n` +
                `Pull request title: ${prTitle}\n\n` +
                `Url: ${prUrl}`;

    core.setOutput('subject', `Request to add a new design ${type}`);
    core.setOutput('body', body);
} catch (error) {
    console.error(error.message);
    core.setFailed(error.message);
}