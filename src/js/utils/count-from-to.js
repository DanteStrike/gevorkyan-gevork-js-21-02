import Timer from "./timer";

export const countFromTo = (from, to, timerOptions, callback = () => {}) => {
  const timer = new Timer(timerOptions);
  timer.action = () => {
    callback(from);

    if (from === to) {
      timer.stop();
    }

    if (from < to) {
      from++;
    }

    if (from > to) {
      from--;
    }
  };
  timer.start();
};
