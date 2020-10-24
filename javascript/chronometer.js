class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
 
  startClick() {
    const timeoutId = setInterval(() => {
      this.currentTime++;
    }, 1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber() {
    let minutes = 0;
    if (this.currentTime % 60 === 0) {
      minutes++;
    }
    if (minutes <= 0) {
      return `${this.currentTime}`;
    }
    if (minutes => 0)
      return `${minutes}${this.currentTime}`;
  }
  stopClick() {
   clearInterval(this.timeoutId);
  }
  resetClick() {
    return this.currentTime = 0;
  }
  splitClick() {
    return `0${this.getMinutes()}:0${this.getSeconds()}`;
  }
}

