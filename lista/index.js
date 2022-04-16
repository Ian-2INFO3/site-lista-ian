function addTarefa() {
  const novaTarefa = document.getElementsByClassName("nova-tarefa")[0].value;
  if (novaTarefa == "") {
    return;
  }
  const $ul = document.getElementsByTagName("ul")[0];
  const $li = document.createElement("li");
  const $div = document.createElement("div");
  $div.className += "checkbox";
  const $label = document.createElement("label");
  const $input = document.createElement("input");
  $input.className += "tarefa";
  $input.setAttribute("type", "checkbox");
  $input.setAttribute("name", "tasks");
  $input.addEventListener("click", handleRemoved);
  $label.appendChild($input);
  $label.appendChild(document.createTextNode(novaTarefa));
  $div.appendChild($label);
  $li.appendChild($div);
  $ul.appendChild($li);
  document.getElementsByClassName("nova-tarefa")[0].value = "";
}

function handleRemoved(e) {
  const $li = e.currentTarget.closest("li");
  $li.innerHTML = "";
}

function trocaTitulo() {
  const Titulo = document.getElementsByTagName("h1")[0];
  const novoTitulo = document.getElementsByClassName("troca-titulo")[0].value;
  Titulo.innerHTML = novoTitulo;
}
document
  .getElementsByClassName("add-tarefa")[0]
  .addEventListener("click", addTarefa);

const tarefas = document.getElementsByClassName("tarefa");
Array.from(tarefas).forEach((task) =>
  task.addEventListener("click", handleRemoved)
);

document
  .getElementsByClassName("ok-titulo")[0]
  .addEventListener("click", trocaTitulo);
