# Get custom email message with PR info

Provides you a well formated email subject and body using branch name used for Pull Request and other information obtained from the pull request.

```yaml
inputs:
  repo-name:
    description: 'Repository name'
    required: true
  groups:
    description: 'Branch groups (as CSV) for which you want to get email message data'
    required: true
  branch-name:
    description: 'Branch name'
    required: true
  pr-title:
    description: 'Pull request title'
  pr-url:
    description: 'Pull request url'
outputs:
  subject:
    description: 'Email subject'
  body:
    description: Email body
```  