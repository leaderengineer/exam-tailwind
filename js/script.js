let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

function clock() {
  const now = new Date();
  let h = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
  let m = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  let s = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
  hour.textContent = h;
  minute.textContent = m;
  second.textContent = s;
}

clock();

setInterval(clock, 1000);
