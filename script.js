document.getElementById("b1").addEventListener("click", madLib1);

function madLib1() {
  let w1 = document.getElementById("word1").value;
  let w2 = document.getElementById("word2").value;
  let w3 = document.getElementById("word3").value;
  let w4 = document.getElementById("word4").value;

  document.getElementById(
    "output"
  ).innerHTML = ` "There are too may ${w1} on this ${w2} airplane!", I screamed. " Somebody
  has to ${w3} on the ${w4} to solve this problem!" `;
}

document.getElementById("b2").addEventListener("click", madLib2);

function madLib2() {
  let w1 = document.getElementById("word1").value;
  let w2 = document.getElementById("word2").value;
  let w3 = document.getElementById("word3").value;
  let w4 = document.getElementById("word4").value;

  document.getElementById(
    "output"
  ).innerHTML = ` "I saw a bunch of ${w1} that looked kinda ${w2} over there.", I mentioned. Then me and my friends go ${w3} to the ${w4} to check it out`;
}
