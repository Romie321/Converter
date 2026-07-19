const numInput = document.getElementById(number);
const numConvert = document.getElementById(convert - btn);
const numOutput = document.getElementById(output);
const copyBtn = document.getElementById(copy - btn);

function convertToRoman(numInput) {
  let numerals = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

  let romanNum = "";
  let numKeys = Object.keys(numerals)
    .map(Number)
    .sort((a, b) => b - a);

  for (let i = 0; i < numKeys.length; i++) {
    let key = numKeys[i];
    while (key <= num) {
      romanNum += numerals[key];
      num -= key;
    }
  }
  return (numOutput.innerhtml = romanNum);
}

//console.log(convertToRoman(36));

numConvert.addEventListener("click", convertToRoman);

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(numOutput.value);
    statusMsg.textContent = "Copied to clipboard!";
    statusMsg.style.color = "green";
  } catch (err) {
    console.error("Failed to copy: ", err);
    statusMsg.textContent = "Failed to copy.";
    statusMsg.style.color = "red";
  }
});
