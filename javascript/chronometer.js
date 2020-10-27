class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    // ... your code goes here
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      console.log(this);
      callback();
      this.currentTime++;
    }, 1000);
    // ... your code goes here
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
    // ... your code goes here
  }
  getSeconds() {
    return this.currentTime % 60;
    // ... your code goes here
  }
  twoDigitsNumber() {
    let minutes = 0;
    if (this.currentTime % 60 === 0) {
      minutes++;
    }
    if (minutes <= 0) {
      return `${this.currentTime}`;
    }
    if ((minutes) => 0) return `${minutes}${this.currentTime}`;
  }
  stopClick() {
    clearInterval(this.intervalId);
    // ... your code goes here
  }
  resetClick() {
    this.currentTime = 0;
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}