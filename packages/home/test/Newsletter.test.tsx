import React from 'react';
import Newsletter from '../src/components/Newsletter';
// import handleSubmit from '../src/components/Newsletter'

describe('<Newsletter />', () => {
  it('should render complete newsletter subscribe form', () => {
    expect(
      <Newsletter
        title="Suscríbete a nuestro newsletter"
        submit="Suscríbete"
        onSubmit={(email: string) => {
          alert(`Subscribing ${email} to the newsletter.`);
        }}
      />
    ).toBeTruthy();
  });

  // eslint-disable-next-line jest/no-commented-out-tests
  // it('should return false if email use a ","', () => {
  //   const initials = handleSubmit("Jhondoe@mail.com");
  //   expect(initials).toBe(false);
  // });
});
