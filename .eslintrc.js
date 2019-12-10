module.exports =  {
    parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
    extends:  [
      'airbnb-typescript/base',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    ],
    parserOptions:  {
      ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
      sourceType:  'module',  // Allows for the use of imports
    },
    rules:  {
      "import/prefer-default-export": 0,
      "no-useless-constructor": 0, // для inject'а в конструкторах
      "no-empty-function": 0, // для inject'а в конструкторах
      "class-methods-use-this": 0
    },
  };
  