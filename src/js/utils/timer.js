class Timer {
  constructor({action = () => {}, mod = Timer.Mod.TICK, delay = 1000, type = Timer.Type.SET_TIMEOUT}) {
    this._timerID = null;
    this._delay = delay;
    this._action = action;
    this._mod = mod;
    this._type = type;
    this._status = Timer.Status.STOP;
  }

  set action(action) {
    this.stop();
    this._action = action;
  }

  set delay(delay) {
    this.stop();
    this._delay = delay;
  }

  set mod(mod) {
    this.stop();
    this._mod = mod;
  }

  set type(type) {
    this.stop();
    this._type = type;
  }

  start() {
    this.stop();
    this._status = Timer.Status.START;

    switch (this._mod) {
      case Timer.Mod.TICK:
        this._tick();
        return;

      case Timer.Mod.CYCLE:
        this._action();
        this._cycle();
        return;
    }
  }

  stop() {
    if (this._timerID !== null) {
      clearTimeout(this._timerID);
    }
    this._status = Timer.Status.STOP;
  }

  _tick() {
    const actionWithStop = () => {
      this._action();
      this.stop();
    };

    this._timerID = this._type === Timer.Type.SET_TIMEOUT ?
      setTimeout(actionWithStop, this._delay) : setInterval(actionWithStop, this._delay);
  }

  _cycle() {
    this._timerID = this._type === Timer.Type.SET_TIMEOUT ?
      setTimeout(() => {
        this._action();

        if (this._status === Timer.Status.START) {
          this._cycle();
        }
      }, this._delay) : setInterval(() => this._action(), this._delay);
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

Timer.Status = {
  STOP: `stop`,
  START: `start`
};

export default Timer;
