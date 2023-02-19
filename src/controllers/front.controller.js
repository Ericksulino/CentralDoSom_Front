
const getHome = (req,res) =>{
    const API_URL = 'http://localhost:5000/item?limit=10';
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
        res.render("home",{produtos: data.produtos});
      } catch (error) {
        console.error(error);
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
  let token = req.headers.authorization; // obter token do cabeçalho
  console.log(token);

  const API_URL = 'http://localhost:5000/item';
  async function fetchData() {
    try {
      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          "Authorization": `${token}` // passar o token para a requisição
        }
      });

      if (!response.ok) {
        throw new Error(`Erro ao buscar dados. Status: ${response.status}`);
      }

      const data = await response.json();
      res.render('meus_produtos',{produtos: data.produtos});
    } catch (error) {
      console.error(error);
    }
  }
  fetchData();
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