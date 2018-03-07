const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    // store res in variable
    const data = {
      from: 'from',
      text: 'text'
    };
    const res = generateMessage(data.from, data.text);

    // expect(res.from).toBe(data.from);
    // expect(res.text).toBe(data.text);
    expect(res).toInclude(data);
    expect(res.createdAt).toBeA('number');
  });
});