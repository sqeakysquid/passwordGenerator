var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://random-word-api.herokuapp.com/word?number=100", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .then(function (data) {
    let words = []
    for (var i = 0; i < data.results.length; i++) {
      words.push(data.results[i])
      console.log(words)
    }
  })
  .catch(error => console.log('error', error));
let promise = fetch("https://random-word-api.herokuapp.com//word?number=10")

result = words

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
