let numInput = document.getElementById("number");
let numConvert = document.getElementById("convert");
let numOutput = document.getElementById("output");
let copyBtn = document.getElementById("copy");
let statusMsg = document.getElementById("status");

function convertToRoman(inputValue) {
  const inputNumber = Number(inputValue);

  if (!Number.isInteger(inputNumber) || inputNumber <= 0) {
    numOutput.textContent = "Please enter a valid positive integer";
    return;
  }

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
  let remainingValue = inputNumber;

  for (let i = 0; i < numKeys.length; i++) {
    let key = numKeys[i];
    while (key <= remainingValue) {
      romanNum += numerals[key];
      remainingValue -= key;
    }
  }

  numOutput.textContent = romanNum;
}

numConvert.addEventListener("click", () => {
  convertToRoman(numInput.value);
});

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(numOutput.textContent);
    if (statusMsg) {
      statusMsg.textContent = "Copied to clipboard!";
      statusMsg.style.color = "green";
    }
  } catch (err) {
    console.error("Failed to copy: ", err);
    if (statusMsg) {
      statusMsg.textContent = "Failed to copy.";
      statusMsg.style.color = "red";
    }
  }
});
