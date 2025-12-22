function submit(valid, link, messageFail="incorrect") {
  let input = generateHash(document.getElementById("pwd").value);
  // location.pathname = input;
  if (input == valid) {
    document.getElementById("validity").innerHTML = "correct";
    location.pathname = link;
  }
  else {
    document.getElementById("validity").innerHTML = messageFail;
  }
}

const generateHash = (string) => {
  let hash = 0;
  for (const char of string) {
    hash = (hash << 5) - hash + char.charCodeAt(0);
    hash |= 0; // Constrain to 32bit integer
  }
  return hash;
};

function codeSubmit(element, link) {
  let checked = document.getElementById("choice3").checked;
  if (checked) {
    document.getElementById("validity").innerHTML = "correct";
    location.pathname = link;
  }
  else {
    document.getElementById("validity").innerHTML = "incorrect";
  }
}
