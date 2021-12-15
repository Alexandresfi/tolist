const description = document.getElementById("description");
const ul = document.getElementById("itens");
const Tasks = [];

const checkbox = '<input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">'

document.getElementById("add").addEventListener("click",()=>{ //create task

  Tasks.push(description.value);
  showTasks()
  description.value=" ";
  description.focus()
})

function showTasks (){
  ul.innerHTML = " ";
  for(task of Tasks){
    const li = document.createElement("li");
    const item = document.createTextNode(task);

    const done = document.createElement("input")
    done.setAttribute('type', "checkbox")
    li.appendChild(done)
    
    li.appendChild(item)
    ul.appendChild(li)

    let pos = description.value

    const ok = document.createElement("button")
    ok.textContent = "X";
    li.appendChild(ok)

    const atC = document.createAttribute("class")
    atC.value = "btn btn-outline-danger ml-5 ok";
    ok.setAttributeNode(atC)

    var at = document.createAttribute("class"); //adicionando clss ao botão realizada
    at.value = "form-check-input mt-2 ml-5";
    done.setAttributeNode(at);
    done.addEventListener("click",()=>{li.classList.toggle("riscar");})

    // document.getElementsByClassName('at')[0].addEventListener("click",()=>{li.classList.toggle("riscar");})

    
    // ok.setAttribute("onclick",apagar(pos))
    document.getElementsByClassName('ok').addEventListener('click', apagar(pos))
  }
}


function apagar(pos){
  console.log(pos)
  Tasks.splice(pos,1);
  showTasks()
}
