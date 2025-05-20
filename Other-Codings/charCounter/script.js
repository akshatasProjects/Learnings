const textInput = document.getElementById("text");
const countChar = document.getElementById("count");
const countWords = document.getElementById("countWords");

textInput.addEventListener("input", () => {
  let valueLen = textInput.value.trim().length;
  countChar.textContent = `Characters: ` + valueLen;

  // counting words
  let getWords = textInput.value.trim();
  let word = getWords.split(" ");
  countWords.textContent = `Words are:` + word.length;
});
