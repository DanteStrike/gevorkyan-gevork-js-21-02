import Timer from "./timer";

export const countFromTo = (a, b, timerOptions, callback = () => {}) => {
  const timer = new Timer(timerOptions);
  timer.action = () => {
    callback(a);

    if (a === b) {
      timer.stop();
    }

    if (a < b) {
      a++;
    }

    if (a > b) {
      a--;
    }
  };
  timer.start();
};
