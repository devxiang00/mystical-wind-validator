// Importing the required module
const Ajv = require('ajv');

// Creating a new instance of Ajv validator with options
const ajv = new Ajv({
  allErrors: true, // Report all errors found, not just the first one
  strict: true, // Validate all schema rules strictly
  coerceTypes: true, // Coerce types of data if possible
});

/**
 * Validate an object against a JSON schema.
 * @param {object} schema - JSON schema to validate against.
 * @param {object} data - Data to be validated.
 * @returns {boolean} - True if data is valid, false otherwise.
 * @throws {Error} - Throws error if schema compilation fails.
 */
function validate(schema, data) {
  try {
    // Compiling the provided schema
    const validateFunction = ajv.compile(schema);

    // Validating the data against the compiled schema
    const valid = validateFunction(data);

    // Returning the validation result
    return valid;
  } catch (error) {
    // Throw an error if schema compilation fails
    throw new Error('Failed to compile schema: ' + error.message);
  }
}

module.exports = validate;
