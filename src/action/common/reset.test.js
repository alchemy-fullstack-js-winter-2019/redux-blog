import { RESET, reset } from './reset';

describe('reset', () => {
  it('can reset', () => {
    const resettedAction = reset();
    expect(resettedAction).toEqual({
      type: RESET
    });
  });
});
