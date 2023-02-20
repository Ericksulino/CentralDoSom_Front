const { search } = require("../../../API_CentalDoSom/src/routes/user.route");

const getHome = (req,res) =>{
   // Recuperar informações da URL
    const {filter} = req.query;
    const {seach} = req.query;
    var flag = true;
    let API_URL = 'http://localhost:5000/item?limit=1000';
    if(filter){
      API_URL = 'http://localhost:5000/item/category?categoria='+filter; 
      flag = false;
    }
    else if(seach){
      flag = false;
      API_URL = 'http://localhost:5000/item/seach?nome='+seach;
    }

    async function fetchData() {
      try {
        const response = await fetch(API_URL, {
          method: 'GET',
        });
    
        if (!response.ok) {
          throw new Error(`Erro ao buscar dados. Status: ${response.status}`);
        }
    
        const data = await response.json();
        //console.log(data.produtos);
        res.render("home",{meio: flag,produtos: data.produtos});
      } catch (error) {
        console.error(error);
        res.render("home");
      }
    }
    fetchData();
}

const getLogin =(req,res) =>{
    res.render('login');
}

const getCadUser =(req,res) =>{
    const {message} = req.query;
    res.render('cad_user',{message});
}

const getCadItem =(req,res) =>{
    res.render('cad_item');
}

const getMore =(req,res) =>{
    // Recuperar informações da URL
    const { imagem, nome, valor, categoria, tipo, descricao ,anunciante,telefone} = req.query;

    // Renderizar a página correta com as informações recuperadas

    res.render('more',{ imagem, nome, valor, categoria, tipo, descricao,anunciante,telefone});
}

const geContato =(req,res) =>{
    res.render('contato');
}

const getProds =(req,res) =>{

      res.render('meus_produtos');
}



module.exports ={
    getHome,
    getLogin,
    getCadUser,
    getCadItem,
    geContato,
    getProds,
    getMore,
};