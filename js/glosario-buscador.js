const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");

let palabras = ["Matemática", "Resta", "Multiplicación", "Propiedad", "Asociativa", "Conmutativa", "Distributiva","Elemento neutro", "División", "Divisor", "Cociente", "Resto", "Números", "Naturales", "Números naturales", "Enteros", "Conjunto de numeros naturales","Conjunto de numeros enteros", "Conjunto de numeros Q", "Conjunto de numeros irracionales","Conjunto de numeros Reales", "Par", "Impar","Igual", "Diferente", "Decimal", "Mayor que", "Menor que", "Fracción", "NUmerador", "Denominador", "Raíz", "Ecuación", "Sustitución","Potencición", "Exponente", "Base"];

function addPalabra(selectedPalabra = "") { // Added default parameter
    options.innerHTML = "";
    palabras.forEach(palabra => { // Changed from countries to palabras
        let isSelected = palabra == selectedPalabra ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${palabra}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addPalabra(); // No parameter needed due to default parameter in function

function updateName(selectedLi) {
    searchInp.value = "";
    addPalabra(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = palabras.filter(data => { // Changed from countries to palabras
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Palabra not found</p>`; // Changed message text
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));



