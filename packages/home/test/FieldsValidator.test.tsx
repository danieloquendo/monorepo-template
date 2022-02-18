import { validateEmail } from '../src/components/Newsletter/FieldsValidator';

describe('Fields validator', () => {
  it('should return false if "@" doen´t exist', () => {
    const initials = validateEmail('Jhondoe.com');
    expect(initials).toBe(false);
  });

  it('should return false if email use a ","', () => {
    const initials = validateEmail('Jhondoe@mail,com');
    expect(initials).toBe(false);
  });

  it('should return true if email use a corporate address', () => {
    const initials = validateEmail('Jhondoe@corporate.com');
    expect(initials).toBeTruthy();
  });
});
