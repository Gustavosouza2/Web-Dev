

document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")

);

documento.querySelector("#qtde").addEventListener("change, atualizarPreco")

function atualizarPreco(){
    const qtde = documento.querySelector("#qtde").value
    documento.querySelector("#preco").innerHTML = qtde
}