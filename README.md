# Get custom email message with PR info

Provides a well formated email subject and body using branch name used for Pull Request and other information obtained from the pull request.

### Usage
```yaml
name: Get message
uses: Devansh-Maurya/Get-Email-Message-From-Branch-Action@v3
with:
  repo: ${{ github.repository }}
  groups: group1,gropup2
  branch: ${{ github.event.pull_request.head.ref }}
  pr-title: ${{ github.event.pull_request.title }}
  pr-url: ${{ github.event.pull_request.html_url }}
```


### Documentation

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
    description: 'Email body'
```  

