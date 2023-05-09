const digits = document.querySelectorAll(".digit");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");

let count = 10;

start.addEventListener("click", () => {
  const intervalId = setInterval(() => {
    count = count - 1;
    digits[2].innerHTML = count;
    if (count === 0) {
      clearInterval(intervalId);
    }
    reset.addEventListener("click", () => {
      clearInterval(intervalId);
      digits[2].innerHTML = 00;
    });
  }, 1000);
});
