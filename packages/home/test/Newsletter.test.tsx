import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Newsletter from '../src/components/Newsletter';
// import handleSubmit from '../src/components/Newsletter'

let container: any = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

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

  it('should no call any event without no data in form', async () => {
    act(() => {
      render(
        <Newsletter
          title="Suscríbete a nuestro newsletter"
          submit="Suscríbete"
          onSubmit={(email: string) => {
            alert(`Subscribing ${email} to the newsletter.`);
          }}
        />,
        container
      );
    });

    const validateSpy = jest.fn();

    const button = container.querySelector('[data-testid="store-loading-button"]');

    await act(async () => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(validateSpy.mock.calls.length).toBe(1);
  });
});
