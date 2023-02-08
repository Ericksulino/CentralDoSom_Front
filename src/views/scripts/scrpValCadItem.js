//import Cadastro from './cadastros.js';

const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');

form.addEventListener('submit',(event)=>{
  event.preventDefault();
  nameValidate();
  cateValidade();
  condValidade();
  descValidate();
  valValidate();
  imgValidate();

  let isValid = true;
  for(let i = 0; i < campos.length; i++){
    if(campos[i].style.border == '2px solid rgb(230, 54, 54)'){
      isValid = false;
      break;
    }
  }
console.log(isValid)
  if(isValid){
    const dados = {
      nome: campos[0].value,
      categoria: campos[1].value,
      tipo: campos[2].value,
      descricao: campos[3].value,
      valor: campos[4].value,
      //anunciante:"63e0637fdd2d0f6fe5664025",
      foto: campos[5].value,
    };
    //console.log(dados);
    fetch('5000/item', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    })
    .then(res => {
      if (res.status === 201) {
        console.log(res.message);
        window.location.href = '/';

      } else if (res.status === 400 || 500) {
        //message = ("ERRO ao Cadastrar o Item!");
        //type = "danger"
        console.log(res.json());
        spans[6].style.display = 'block';
        //window.location.href = '/CadUser';
      }
    })
  }
});



function setError(index){
  campos[index].style.border = '2px solid #e63636';
  spans[index].style.display = 'block';
}

function removError(index){
  campos[index].style.border = '';
  spans[index].style.display = 'none';
}

function nameValidate(){
  if (campos[0].value.length < 5){
    setError(0);
  }
  else{
    removError(0);
  }
}

function cateValidade(){
  console.log(campos[1].value)
  if (campos[1].value == ""){
    setError(1);
  }
  else{
    removError(1);
  }
}
function condValidade(){
  console.log(campos[2].value)
  if (campos[2].value == ""){
    setError(2);
  }
  else{
    removError(2);
  }
}

function descValidate(){
  if (campos[3].value.length < 10){
    setError(3);
  }
  else{
    removError(3);
  }
}

function valValidate(){
  console.log(campos[4].value)
  if (campos[4].value == "" || parseFloat(campos[4].value) < 0){
    setError(4);
  }
  else{
    removError(4);
  }
}

function imgValidate(){
  console.log(campos[5].value)
  if (campos[5].value == ""){
    setError(5);
  }
  else{
    removError(5);
  }
}
