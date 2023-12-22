const { convertFormat, contadorTimer, pauseTimer, stopTimer } = require('../js/time');

test("convertFormat should format seconds to time in 24-hour format", () => {
  const seconds = 3600;

  const result = convertFormat(seconds);

  expect(result).toBe("01:00:00");
});
