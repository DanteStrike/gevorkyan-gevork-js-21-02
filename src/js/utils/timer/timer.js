class Timer {
  constructor(action = () => {}, mod = Timer.Mod.TICK, delay = 1000, type = Timer.Type.SET_TIMEOUT) {
    this._timerID = null;
    this._delay = delay;
    this._action = action;
    this._mod = mod;
    this._type = type;
  }

  set action(action) {
    this._action = action;
  }

  set delay(delay) {
    this._delay = delay;
  }

  set mod(mod) {
    this._mod = mod;
  }

  set type(type) {
    this._type = type;
  }

  start() {
    this.stop();

    switch (this._mod) {
      case Timer.Mod.TICK:
        this._tick();
        return;

      case Timer.Mod.CYCLE:
        this._cycle();
        return;
    }
  }

  stop() {
    if (this._timerID !== null) {
      clearTimeout(this._timerID);
    }
  }

  _tick() {
    const action = this._action;
    const delay = this._delay;

    this._timerID = this._type === Timer.Type.SET_TIMEOUT ?
      setTimeout(action, delay)
      : setInterval(() => {
        this.stop();
        action();
      }, delay);
  }

  _cycle() {
    const action = this._action;
    const cycle = this._cycle.bind(this);
    const delay = this._delay;

    this._timerID = this._type === Timer.Type.SET_TIMEOUT ?
      setTimeout(() => {
        action();
        cycle();
      }, delay) : setInterval(action, delay);
  }
}

Timer.Type = {
  SET_TIMEOUT: `setTimeout`,
  SET_INTERVAL: `setInterval`
};

Timer.Mod = {
  TICK: `tick`,
  CYCLE: `cycle`
};

export default Timer;
