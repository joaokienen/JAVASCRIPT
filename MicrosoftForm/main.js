// Captura de campos
const ContainerDiv1 = document.getElementById("ContainerDiv1");
const ContainerDiv2 = document.getElementById("ContainerDiv2");
const ContainerInput0 = document.getElementById("ContainerInput0");
const ContainerInput1 = document.getElementById("ContainerInput1");
const ContainerDiv1Sub0 = document.getElementById("ContainerDiv1Sub0");
const ContainerDiv1Sub3 = document.getElementById("ContainerDiv1Sub3");
const ContainerDiv2Sub4 = document.getElementById("ContainerDiv2Sub4");
const ContainerPer0 = document.getElementById("ContainerPer0");
const ContainerPer1 = document.getElementById("ContainerPer1");
const ContainerBtn0 = document.getElementById("ContainerBtn0");
const ContainerBtn1 = document.getElementById("ContainerBtn1");
const ContainerBtn2 = document.getElementById("ContainerBtn2");

// Validador de regex
const user_reg = /.+@domain\.com\.br$/;
const pass_reg = /(?=.{8,})(?=.*[A-Z])(?=.*[0-9])([^A-Za-z0-9])/;


// Ativador de tecla -ENTER-
var BTN0 = document.getElementById("ContainerInput0");
BTN0.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("ContainerBtn0").click();
  }
});

// Ativador de tecla -ENTER-
var BTN1 = document.getElementById("ContainerInput1");
BTN1.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("ContainerBtn2").click();
  }
});

// Aplicador de estilos CSS
function StylesApply0 () {
  ContainerDiv1.style.display = "none";
  ContainerDiv2.style.display = "block";
  document.getElementById("ContainerInput1").focus();
  ContainerPer1.style.display = "none";
  ContainerInput1.style.borderBottom = "1px solid #000";
  ContainerInput1.style.padding = "10px 0px 5px 1px";
  ContainerDiv2.style.opacity = "1";
}

// Aplicador de estilos CSS
function StylesApply1 () {
  ContainerDiv2.style.display = "none";
  ContainerDiv1.style.display = "block";
  ContainerDiv1.style.opacity = "1";
  document.getElementById("ContainerInput0").focus();
  ContainerPer0.style.display = "none";
  ContainerInput0.style.borderBottom = "1px solid #000";
}

// Validador Avançar
ContainerBtn0.onclick = function () {
  const avan = document.getElementById("ContainerInput0").value;
  if (user_reg.test(avan)) {
    if (ContainerDiv1.style.display !== "none") {
      ContainerDiv1.style.opacity = "0.2";
      document.getElementById("ContainerLab1").innerHTML = avan;
      setTimeout(() => {StylesApply0()}, "1000")
    } 
   } else {
      ContainerPer0.style.display = "block";
      ContainerPer0.style.margin = "10px 45px 10px 45px";
      ContainerInput0.style.borderBottom = "1px solid #E81123";
      ContainerInput0.style.padding = "0px 0px 10px 1px";
      ContainerDiv1Sub0.style.padding = "0px 0px 0px 1px";
      ContainerDiv1Sub3.style.padding = "30px 70px 50px 1px";
      ContainerDiv1Sub0.style.padding = "0px 0px 0px 1px";
      document.getElementById("ContainerInput0").focus();
    }
};

// Validador Entrar
ContainerBtn2.onclick = function () {
  const ent = document.getElementById("ContainerInput1").value;
  if (pass_reg.test(ent)) {
     // Action 
  } else {
    ContainerPer1.style.display = "block";
    ContainerInput1.style.borderBottom = "1px solid #E81123";
    ContainerInput1.style.padding = "0px 0px 5px 1px";
    ContainerDiv1Sub0.style.padding = "0px 0px 0px 1px";
    document.getElementById("ContainerInput1").focus();
    ContainerDiv2Sub4.style.padding = "25px 70px 50px 1px"; 
  }
};

// Validador Voltar
ContainerBtn1.onclick = function () {
  if (ContainerDiv2.style.display !== "none") {
    ContainerDiv2.style.opacity = "0.3";
    setTimeout(() => {StylesApply1()}, "500")
  } 
};
