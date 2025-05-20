const btn = document.getElementById("btn");
const message = document.getElementById("msg");

btn.addEventListener("click", () => {
  if (message.style.display === "none" || message.style.display === "") {
    btn.textContent = "Hide Message";
    message.style.display = "block";
  } else {
    btn.textContent = "Show Message";
    message.style.display = "none";
  }
});
