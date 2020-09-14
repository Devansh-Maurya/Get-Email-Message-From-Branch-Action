#! /usr/bin/env node

const core = require('@actions/core');
const github = require('@actions/github');
const sgMail = require('@sendgrid/mail');

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

    var subject = `Request to add a new design ${type}`;
    var body = `A request for a new design ${type}: ${title} has been made\n\n` +
                `Pull request title: ${prTitle}\n\n` +
                `Url: ${prUrl}`;

    core.setOutput('subject', subject);
    core.setOutput('body', body);

    var apiKey = core.getInput('sendgrid-api-key');
    var senderEmail = core.getInput('sender-email');

    sgMail.setApiKey(apiKey);

    const msg = {
        to: 'devansh233@gmail.com',
        from: senderEmail,
        subject: subject,
        text: body
    };
    
    sgMail
        .send(msg)
        .then(() => console.log('Mail sent successfully'))
        .catch(error => console.error(error.toString()));

} catch (error) {
    console.error(error.message);
    core.setFailed(error.message);
}