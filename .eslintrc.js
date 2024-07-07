module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    // Enforce 2 space indentation
    indent: ['error', 2],

    // Require single quotes for strings
    quotes: ['error', 'single'],

    // Enforce semicolon usage at the end of statements
    semi: ['error', 'never'],

    // No space before function parentheses
    'space-before-function-paren': ['error', 'never'],

    // Require use of `===` and `!==`
    eqeqeq: ['error', 'always'],

    // Disallow unused variables
    'no-unused-vars': ['error'],

    // Disallow trailing spaces at the end of lines
    'no-trailing-spaces': ['error'],

    // Require consistent use of trailing commas in object and array literals
    'comma-dangle': ['error', 'never'],

    // Enforce consistent spacing inside array brackets
    'array-bracket-spacing': ['error', 'never'],

    // Enforce consistent spacing inside single-line blocks
    'block-spacing': ['error', 'always'],

    // Require camel case naming convention
    camelcase: ['error', { properties: 'always' }],

    // Enforce consistent comma style
    'comma-style': ['error', 'last'],

    // Enforce consistent use of this aliases
    'consistent-this': ['error', 'self'],

    // Enforce newline at the end of file
    'eol-last': ['error', 'always'],

    // Enforce consistent spacing before and after keywords
    'keyword-spacing': ['error', { before: true, after: true }],

    // Enforce consistent linebreak style
    'linebreak-style': ['error', 'unix'],

    // Enforce a maximum line length
    'max-len': ['error', { code: 80 }],

    // Disallow multiple empty lines
    'no-multiple-empty-lines': ['error', { max: 1 }],

    // Disallow use of `new` without assigning the instance
    'no-new': ['error'],

    // Disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': ['error'],

    // Disallow use of console (you might want to turn this off in development)
    'no-console': ['warn'],

    // Disallow use of `var` and prefer `const` or `let`
    'no-var': ['error'],

    // Enforce the consistent use of single quotes in JSX attributes
    'jsx-quotes': ['error', 'prefer-single'],

    // Enforce spacing around colons of switch statements
    'switch-colon-spacing': ['error', { after: true, before: false }]
  }
}
