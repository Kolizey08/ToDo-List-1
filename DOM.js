const form = document.querySelector("#form");
const btn = document.querySelector("#btn");
const inp = document.querySelector("#inp");
const ul = document.querySelector("#ul");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inp.value) {
    const li = document.createElement("li");
    li.textContent = inp.value;

    const remov = document.createElement("button");
    remov.textContent = "x";

    remov.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });

    
    const inp2 = document.createElement('input')
    inp2.type = 'checkbox'
    
    inp2.addEventListener('click', (e) => {
        if(inp2.checked === true) {
            li.style.textDecoration = 'line-through'
        }else {
            li.style.textDecoration = 'none'
        }
    })
    
    li.prepend(inp2)
    li.append(remov);

    inp.value = "";
    ul.append(li);
    li.style.listStyleType = 'none'
  }
});
