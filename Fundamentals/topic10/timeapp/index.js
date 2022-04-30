class TimeApp {
  saniyeler = 0; //655
  stopValue = null;
  timeContent = document.querySelector("h2");

  timeParse(san) {
    // let hour = san / 3600
    // let min = (san - hour * 3600) * 60
    // let s = san - deqiqe * 60;

    let deqiqe = Math.floor(san / 60);
    let qaliqSaniyeler = san - deqiqe * 60;

    let timeResult = `${deqiqe < 10 ? "0" + deqiqe : deqiqe}:${
      qaliqSaniyeler < 10 ? "0" + qaliqSaniyeler : qaliqSaniyeler
    }`;

    return timeResult;
  }

  startTime() {
    clearInterval(this.stopValue);
    this.stopValue = setInterval(() => {
      this.saniyeler++;

      let netice = timeParse(this.saniyeler);
      console.log(netice);
      this.timeContent.innerHTML = netice;
    }, 1000);
  }

  stoptime() {
    clearInterval(this.stopValue);
  }

  resetTime() {
    this.saniyeler = 0;
    this.timeContent.innerHTML = "00:00";
  }
}

let timeCount = new TimeApp();

document.querySelector("#startTime").addEventListener("click", function () {
  timeCount.startTime();
});

document.querySelector("#stopTime").addEventListener("click", function () {
  timeCount.stoptime();
});

document.querySelector("#resetTime").addEventListener("click", function () {
  timeCount.resetTime();
});


// let a = 5
// let b = 15



// let c = a
// a = b
// b = c