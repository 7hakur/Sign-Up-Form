let pass = document.getElementById("password");
let conPass = document.getElementById("confirm-password");
let result = document.getElementById("result");

function checkPassword() {
  result.innerText =
    pass.value == conPass.value ? "" : "* Passwords don't match";
}

pass.addEventListener("keyup", () => {
  if (conPass.value != 0) checkPassword;
});
conPass.addEventListener("keyup", checkPassword);
