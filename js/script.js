var nameUser = prompt("Inserisca il suo nome");
var surnameUser = prompt("Inserisca il suo cognome");
var colorUser = prompt("Inserisca il suo colore preferito");
var securityProtocol;

securityProtocol = "21";
// console.log(securityProtocol);

document.getElementById("ultraHighSecurityPassword").innerHTML =
  nameUser + surnameUser + colorUser + securityProtocol;
