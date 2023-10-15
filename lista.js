//Seleção de elementos
const listaForm = document.querySelector("#lista-form");
const listaInput = document.querySelector("#lista-input");
const listaList = document.querySelector("#lista-list");
const estados = document.querySelector('#estado');
const cidades = document.querySelector('#cidade');


var estado = document.getElementById("estado");
estado.addEventListener("change", function () {
  var estado = document.getElementById("estado");
  var sigla = estado.value;


  switch (sigla) {
    case "T1":
      var cidade = document.getElementById("cidade");



      for (var i = cidade.children.length - 1; i >= 0; i--) {
        cidade.removeChild(cidade.children[i]);
      }


      var op0 = document.createElement("option");
      op0.innerHTML = "Temporada";
      cidade.appendChild(op0);


      var op1 = document.createElement("option");
      op1.innerHTML = "EP1";
      op1.value = "jp";
      cidade.appendChild(op1);


      var op2 = document.createElement("option");
      op2.innerHTML = "EP2";
      op2.value = "rt";
      cidade.appendChild(op2);


      break;


    case "T2":
      var cidade = document.getElementById("cidade");


      for (var i = cidade.children.length - 1; i >= 0; i--) {
        cidade.removeChild(cidade.children[i]);
      }


      var op0 = document.createElement("option");
      op0.innerHTML = "Episodio";
      cidade.appendChild(op0);


      var op3 = document.createElement("option");
      op3.innerHTML = "EP1";
      op3.value = "re";
      cidade.appendChild(op3);


      var cidade = document.getElementById("cidade");
      var op4 = document.createElement("option");
      op4.innerHTML = "EP2";
      op4.value = "JG";
      cidade.appendChild(op4);


      break;


    case "T3":
      var cidade = document.getElementById("cidade");


      for (var i = cidade.children.length - 1; i >= 0; i--) {
        cidade.removeChild(cidade.children[i]);
      }


      var op0 = document.createElement("option");
      op0.innerHTML = "Selecione um episodio";
      cidade.appendChild(op0);


      var op5 = document.createElement("option");
      op5.innerHTML = "EP1";
      op5.value = "sa";
      cidade.appendChild(op5);


      var cidade = document.getElementById("cidade");
      var op6 = document.createElement("option");
      op6.innerHTML = "EP2";
      op6.value = "MS";
      cidade.appendChild(op6);

  }
});

function capturaTextoSelect(){
  let select = document.querySelector('#estado');
  let optionValue = select.options[select.selectedIndex];

  let Value = optionValue.value;
  let texto = optionValue.text;

  const estado = document.createElement("h3");
  estado.innerHTML = texto;
  lista.appendChild(estado);
  
}

function capturaTextoSelectCidade(){
  let selectCidade = document.querySelector('#cidade');
  let optionValueCidade = selectCidade.options[select.selectedIndex];

  let ValueCidade = optionValueCidade.value;
  let textoCidade = optionValueCidade.text;

  const cidade = document.createElement("h3");
  cidade.innerHTML = textoCidade;
  lista.appendChild(cidade);
  
}


// Funções

const savelista = (text) => {
  // Criar os elementos na div
  const lista = document.createElement("div");
  lista.classList.add("lista");

  const listaTitle = document.createElement("h3");
  listaTitle.innerText = text;
  lista.appendChild(listaTitle);

  const estado = document.createElement("h3");
  estado.innerHTML = text;
  lista.appendChild(estado);

  const cidade = document.createElement("h3");
  cidade.innerHTML = text;
  lista.appendChild(cidade);

  /*function capturaTextoSelect(){
    let select = document.querySelector('#estado');
    let optionValue = select.options[select.selectedIndex];

    let Value = optionValue.value;
    let text = optionValue.text;
  }
  capturaTextoSelect()*/

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-lista");
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
  lista.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("remove-lista");
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  lista.appendChild(deleteBtn);

  listaList.appendChild(lista);

  listaInput.value = "";
  listaInput.focus();
};

// Eventos

// Enviar para div
listaForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //jogar a logica aqui
  
    const select = document.querySelector('#estado');
    const optionValue = select.options[select.selectedIndex];
    const Value = optionValue.value;
    const text = optionValue.text;

    const selectCidade = document.querySelector('#cidade');
    const optionValueCidade = select.options[select.selectedIndex];
    const ValueCidade = optionValue.value;
    const textCidade = optionValue.text;
  

  const inputValue = listaInput.value + " " + text + " " + ValueCidade;

  if (inputValue) {
    savelista(inputValue /*+ " " + text + textCidade*/);
  }
});

//Mapear o clink nos botoes 
document.addEventListener("click", (e) => {
  const targetEl = e.target;
  const parentEl = targetEl.closest("div");
  let listaTitle;

  if (parentEl && parentEl.querySelector("h3")) {
    listaTitle = parentEl.querySelector("h3").innerText || "";
  }
  
  // evento deletar
  if (targetEl.classList.contains("remove-lista")) {
    parentEl.remove();
  }

});
