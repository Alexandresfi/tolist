
document.getElementById("botao").addEventListener("click",criarTarefa)

var tarefas = [];
    var lista = document.getElementById("itens");
    var descricao = document.getElementById("descricao");
    descricao.addEventListener("keypress",adicionarTarefa);


    
    function tamnhoTexto (){
        return descricao.value.length;
    }

function criaritem() {
    
    if (tamnhoTexto() == 0) {
        //excluir posição do array que não tem nada escrito
      }
    
    var li = document.createElement("li");
    li.textContent = descricao.value;
    tarefas.push(descricao.value);
    lista.appendChild(li); //foi criado o conteúdo de cada item e já foi anexado na lista.
    var pos = tarefas.indexOf(descricao.value)
    descricao.value="";
    descricao.focus(); 

    let bt1 = document.createElement("button"); //criando botão para riscar a atividade
    bt1.textContent = " Realizada";
    li.appendChild(bt1);
    let at = document.createAttribute("class"); //adicionando clss ao botão realizada
    at.value = "realizada";
    bt1.setAttributeNode(at);                    

    let bt2 = document.createElement("button");//criando botão para apagar atividade
    bt2.textContent = " apagar";
    li.appendChild(bt2);     
    let atr = document.createAttribute("class"); //adicionando clss ao botão realizada
    atr.value = "concluida";
    bt2.setAttributeNode(atr);          
    
    bt1.addEventListener("click",riscar)
    bt2.addEventListener("click",apagar)


    function riscar() {
                                    //o toogle pega a nossa lista e verefica se tem a class riscar, se tiver ela apaga
    li.classList.toggle("riscar");  //Se não encontrar ela cria
    console.log(tarefas)
    }
  
    
  function apagar (pos){
    li.classList.add("apagar"); // o add pega o nossa lista e verifica se tem a class apagar, se não, ela cria a class
  }
}

function criarTarefa(){
    if(tamnhoTexto() > 0 )
    criaritem()
}

function adicionarTarefa(){
    if (tamnhoTexto() > 0 && event.which == 13)
    criaritem()
}
