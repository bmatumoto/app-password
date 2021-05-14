let displayCode = document.querySelector(".generator__password");

let btnCopyCode = document.querySelector(".generator__password--copy");
let btnGenerator = document.querySelector(".generator__submit--btn");
let password = [];
let itemsPassword = [];

btnCopyCode.addEventListener("click", () => {
  let passwordContent = displayCode.innerText;
  let newTextArea = document.createElement("textarea");
  newTextArea.value = passwordContent;

  displayCode.appendChild(newTextArea);
  newTextArea.select();
  try {
    document.execCommand("copy");
    newTextArea.remove();
    alert("Senha copiada para área de transferência");
  } catch (err) {
    console.log("Ocorreu um erro ao tentar copiar", err);
  }
});

btnGenerator.addEventListener("click", passwordGenerator);

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
  randomPassword(itemsPassword, numberCharacter);
}

function randomPassword(arrPassword, lengthPassword) {
  finalPassword = [];

  for (let i = 0; i < lengthPassword; i++) {
    if (arrPassword.indexOf("Upper") !== -1) {
      password.push(String.fromCharCode(Math.floor(Math.random() * 26) + 65));
    }
    if (arrPassword.indexOf("Lower") !== -1) {
      password.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
    }
    if (arrPassword.indexOf("Number") !== -1) {
      password.push(Math.floor(Math.random() * 10));
    }
  }
  for (let j = 0; j < lengthPassword; j++) {
    finalPassword.push(password[j]);
  }
  sortPassword(finalPassword);
}

function sortPassword(finalPassword) {
  for (let i = 0; i < 5; i++) {
    removeIndex = Math.floor(Math.random() * finalPassword.length);
    addIndex = Math.floor(Math.random() * finalPassword.length);

    let numberOff = finalPassword.splice(removeIndex, 1);
    finalPassword.splice(addIndex, 0, numberOff);
  }
  return (displayCode.innerText = finalPassword.join(""));
}
