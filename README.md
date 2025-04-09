# @kaltmax/password-utilities

> A useful JavaScript library that provides password utility functions.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [generateStrongPassword](#generateStrongPassword)
  - [isStrongPassword](#isStrongPassword)
- [Contribution](#contribution)
- [Security](#security)
- [License](#license)

## Installation

a
Install via npm:

```bash
npm install @kaltmax/password-utilities
```

Install via yarn:

```bash
yarn add @kaltmax/password-utilities
```

## Usage

Import the functions:

```js
import { generateStrongPassword, isStrongPassword} from '@kaltmax/password-utilities';
```

### generateStrongPassword

Generate a strong password with a specific length (default length = 12, minimum length = 8):

```js
const input = 8;
const strongPassword = generateStrongPassword(8);
console.log(strongPassword); // Example Output: C%D8pCKn
```

### isStrongPassword

Checks if a password is strong:

```js
const input = 'Hello World';
const result = isStrongPassword(input);
console.log(result); // "false"
```

## Contribution

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for more details.

## Security

Please refer to our [SECURITY.md](./SECURITY.md) for information about our security policies, how to report vulnerabilities, and our approach to handling security concerns.

## License

This project is licensed under the [MIT License](./LICENSE.md).
