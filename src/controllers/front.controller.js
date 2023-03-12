const getHome = (req,res) =>{
   // Recuperar informações da URL
    const {filter} = req.query;
    const {seach} = req.query;
    const {type} = req.query;
    var msg ='Todos os Produtos';
    var flag = true;
    let API_URL = 'https://api-centraldosom.onrender.com/item?limit=1000';
    if(filter){
      API_URL = 'https://api-centraldosom.onrender.com/item/category?categoria='+filter; 
      flag = false;
      msg = filter;
    }
    else if(seach){
      flag = false;
      API_URL = 'https://api-centraldosom.onrender.com/item/seach?nome='+seach;
      msg = seach;
    }
    else if(type){
      flag = false;
      API_URL = 'https://api-centraldosom.onrender.com/item/type?tipo='+type;
      msg = type;
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
        res.render("home",{msg:msg,meio: flag,produtos: data.produtos});
      } catch (error) {
        console.error(error);
        res.render("home",{msg:msg,meio: flag});
      }
    }
    fetchData();
}

const getLogin =(req,res) =>{
    res.render('login');
}

const getCadUser =(req,res) =>{

    res.render('cad_user');
}

const getEditItem =(req,res) =>{
    const editar = false; 
    // Recuperar informações da URL
    const {imagem, nome, valor, categoria, tipo, descricao ,anunciante,telefone,cidade,UF,id} = req.query;
    res.render('edit_item',{editar,imagem, nome, valor, categoria, tipo, descricao ,anunciante,telefone,cidade,UF,id});
}

const getCadItem =(req,res) =>{
  res.render('cad_item');
}

const getMore =(req,res) =>{
    // Recuperar informações da URL
    const { imagem, nome, valor, categoria, tipo, descricao ,anunciante,telefone,cidade,UF} = req.query;

    // Renderizar a página correta com as informações recuperadas

    res.render('more',{ imagem, nome, valor, categoria, tipo, descricao,anunciante,telefone,cidade,UF});
}

const geContato =(req,res) =>{
    res.render('contato');
}

const getProds =(req,res) =>{

      res.render('meus_produtos');
}

const getTerms =(req,res) =>{

  res.render('termosdeuso');
}

const getPolPriv =(req,res) =>{

  res.render('politica_privacidade');
}

module.exports ={
    getHome,
    getLogin,
    getCadUser,
    getCadItem,
    getEditItem,
    geContato,
    getProds,
    getMore,
    getTerms,
    getPolPriv,
};