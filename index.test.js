// index.test.js
const { sayHello } = require('./index');

test('should greet properly', () => {
  const result = sayHello("ROOOOOOOOOOOOOOOOOOBYO");
  expect(result).toMatch(/Hello Laraqui/);
});
