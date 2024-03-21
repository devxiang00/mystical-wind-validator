# mystical-wind-validator

[![NPM Version](https://img.shields.io/npm/v/mystical-wind-validator.svg?style=flat)](https://www.npmjs.com/package/mystical-wind-validator)
[![License](https://img.shields.io/npm/l/mystical-wind-validator.svg)](https://github.com/yourusername/mystical-wind-validator/blob/main/LICENSE)

A versatile data validator library for JavaScript using JSON schemas powered by Ajv.

## Installation

You can install the library via npm:

```bash
npm install mystical-wind-validator
```

## Usage

```javascript
const validate = require('mystical-wind-validator');

// Define your JSON schema
const schema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    age: { type: 'number', minimum: 0 },
    email: { type: 'string', format: 'email' },
  },
  required: ['name', 'age', 'email'],
};

// Data to be validated
const data = {
  name: 'John Doe',
  age: 30,
  email: 'john@example.com',
};

// Validate the data against the schema
const isValid = validate(schema, data);

if (isValid) {
  console.log('Data is valid!');
} else {
  console.error('Data is invalid.');
}
```

## API

### validate(schema, data)

Validate an object against a JSON schema.

- `schema` (object): JSON schema to validate against.
- `data` (object): Data to be validated.
- Returns `true` if data is valid, `false` otherwise.
- Throws an `Error` if schema compilation fails.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
