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
function textCopier() {
  let copyText = document.getElementById("result");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied the text" + copyText.value);
}
