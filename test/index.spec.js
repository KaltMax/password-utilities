const { generateStrongPassword, isStrongPassword } = require('../dist/index');

describe('generateStrongPassword', () => {
    test('generates a password of the specified length', () => {
        const password = generateStrongPassword(8);
        expect(password.length).toBe(8);
    });

    test('generate a password of length 12, which is the default', () => {
        const password = generateStrongPassword();
        expect(password.length).toBe(12);
    });
});

describe ('isStrongPassword', () => {
   test('returns false for a weak password like "Hello World"', () => {
         const password = 'Hello World';
         expect(isStrongPassword(password)).toBe(false);
    });

    test('returns true for a strong password like "pC%mD8TpCKn2"', () => {
        const password = 'pC%mD8TpCKn2';
        expect(isStrongPassword(password)).toBe(true);
    });
});