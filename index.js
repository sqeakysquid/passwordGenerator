const words = [
  "emphasis",
  "fun",
  "packet",
  "lover",
  "catch",
  "dead",
  "tip",
  "pollution",
  "bridge",
  "slump",
  "feather",
  "carrot",
  "constant",
  "game",
  "exception",
  "learn",
  "testify",
  "star",
  "equation",
  "respect",
  "tray",
  "exploration",
  "lake",
  "cheque",
  "restrain",
  "excess",
  "deer",
  "incapable",
  "accent",
  "floor",
  "seek",
  "slow",
  "feed",
  "cane",
  "host",
  "rear",
  "park",
  "loud",
  "wood",
  "draw",
  "zero",
  "miss",
  "heat",
  "menu",
  "site",
  "coma",
  "flow",
  "chew",
  "rain",
  "halt"
];

let promise = fetch("https://random-word-api.herokuapp.com//word?number=10")

console.log(promise)
function getRandomPassphrase(arr, count) {
  var shuffled = arr.slice(0),
    i = arr.length,
    min = i - count,
    temp,
    index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  let stored = shuffled
    .slice(min)
    .toString()
    .replace(/,/g, " ");
  if (stored.length < 16) {
    alert("try again!");
  } else {
    document.querySelector("#result").innerHTML = [stored];
  }
}

function CopyToClipboard(containerid) {
  var range = document.createRange();
  range.selectNode(containerid); //changed here
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  // document.querySelector("#copied").innerHTML =
  //   "Your new password is copied to the clipboard.";
}

function showElement() {
  document.querySelector("#copied").style.visibility = "visible";
}

function hideElement() {
  document.querySelector("#copied").style.visibility = "hidden";
}
