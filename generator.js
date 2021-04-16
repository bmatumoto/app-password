let displayCode = document.querySelector(".generator__password");

let btnCopyCode = document.querySelector(".generator__password--copy");
let btnGenerator = document.querySelector(".generator__submit--btn");
let password = [];
let itemsPassword = [];

btnCopyCode.addEventListener("click", copyCode);
btnGenerator.addEventListener("click", passwordGenerator);

function copyCode() {
  console.log(displayCode.innerText);
}

function passwordGenerator() {
  itemsPassword = [];
  password = [];
  let hasUpper = document.querySelector(".generator__option--upper").checked;
  let hasLower = document.querySelector(".generator__option--lower").checked;
  let hasNumber = document.querySelector(".generator__option--number").checked;
  let numberCharacter = document.querySelector(".generator__option--value")
    .value;

  hasUpper ? itemsPassword.push("Upper") : false;
  hasLower ? itemsPassword.push("Lower") : false;
  hasNumber ? itemsPassword.push("Number") : false;

  if (numberCharacter < 4 || itemsPassword.length < 1) {
    alert(
      "A senha precisa ter no mínimo:\n- 4 caractéres\n- 1 condição selecionada"
    );
  }
  return (displayCode.innerText = itemsPassword.join(""));
}
