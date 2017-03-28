const os = require('os')
const githubAccountDefault = os.userInfo().username

module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'Node app project'
    },
    version: {
      type: 'string',
      required: false,
      message: 'Initial version',
      default: '0.0.0'
    },
    author: {
      type: 'string',
      message: 'Author'
    },
    branch: {
      type: 'string',
      required: true,
      message: 'Development main branch name',
      default: 'dev'
    },
    githubAccount: {
      type: 'string',
      required: false,
      message: 'GitHub Account',
      default: githubAccountDefault
    },
    flow: {
      type: 'confirm',
      message: 'Setup flowtype?'
    },
    coverage: {
      type: 'confirm',
      message: 'Setup coverage services?'
    },
    ci: {
      type: 'confirm',
      message: 'Setup CI services?'
    },
    ciConfig: {
      when: 'ci',
      type: 'list',
      message: 'Choice a CI service',
      choices: [
        'travis',
        'circleci'
      ],
      default: ['circleci']
    },
    conventional: {
      type: 'confirm',
      message: 'Setup conventional-changelog tasks?'
    },
    conventionalConfig: {
      when: 'conventional',
      type: 'list',
      message: 'Choice a conventional-changelog preset',
      choices: [
        { name: 'none (configure it youreself)', value: 'none' },
        { name: 'angular', value: 'angular' },
        { name: 'atom', value: 'atom' },
        { name: 'codemirror', value: 'codemirror' },
        { name: 'ember', value: 'ember' },
        { name: 'eslint', value: 'eslint' },
        { name: 'express', value: 'express' },
        { name: 'jquery', value: 'jquery' },
        { name: 'jshint', value: 'jshint' }
      ]
    },
    issue: {
      type: 'confirm',
      message: 'Setup issue guide?'
    },
    contribution: {
      type: 'confirm',
      message: 'Setup contribution guide?'
    }
  },
  filters: {
    ".travis.yml": "ciConfig === 'travis'",
    "circle.yml": "ciConfig === 'circleci'",
    ".flowconfig": 'flow',
    "decls/*": 'flow',
    ".github/ISSUE_TEMPLATE.md": 'issue',
    "CONTRIBUTING.md": "contribution"
  },
  helpers: {
    nowYear: function () {
      return new Date().getFullYear()
    },
    authorFullNameFrom: function (author) {
      const startPosition = author.indexOf('<')
      return author.slice(0, startPosition - 1)
    },
    authorEmailFrom: function (author) {
      const startPosition = author.indexOf('<')
      const endPosition = author.indexOf('>')
      return author.slice(startPosition + 1, endPosition)
    },
    classify: function (str) {
      return str.replace(/(?:^|[-_\/])(\w)/g, function (_, c) {
        return c ? c.toUpperCase() : ''
      })
    }
  }
}
