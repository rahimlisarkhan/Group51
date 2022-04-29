let saniyeler = 0; //655
let stopValue = null;
let timeContent = document.querySelector("h2");

function timeParse(san) {
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

document.querySelector("#startTime").addEventListener("click", function () {
  clearInterval(stopValue);
  stopValue = setInterval(() => {
    saniyeler++;

    let netice = timeParse(saniyeler);
    console.log(netice);
    timeContent.innerHTML = netice;
  }, 1000);
});

document.querySelector("#stopTime").addEventListener("click", function () {
  clearInterval(stopValue);
});

document.querySelector("#resetTime").addEventListener("click", function () {
  saniyeler = 0;
  timeContent.innerHTML = "00:00";
});
