const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const arr = ["red", "blue", "green", "orange", "white", "black", "brown"];

  let arrIndex = Math.floor(Math.random() * arr.length);
  let randomColor = arr[arrIndex];
  document.body.style.backgroundColor = randomColor;
});
