const express = require('express')
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static('public')); //pra servir arquivos estáticos da pasta public
app.use(express.urlencoded({ extended: true })); //pra processar dados de formulários


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/contato', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contato.html'));
});

app.post('/contato', (req, res) => {
  const { nome, email, assunto, mensagem } = req.body;
  res.send(`
    <h1>Recebemos a sua sugestão, ${nome}. Obrigado!</h1>
    <p>Email: ${email}</p>
    <p>Assunto: ${assunto}</p>
    <p>Mensagem: ${mensagem}</p>
    <a href="/">Voltar ao cardápio</a>
  `);
});

app.get('/sugestao', (req, res) => {
  res.send(`
    <h1>Recebemos a sua sugestão, ${req.query.nome}, obrigado!</h1>
    <p>Ingredientes: ${req.query.ingredientes}</p>
  `);
});

app.get('/api/lanches', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'data', 'lanches.json'));
});

app.listen(PORT, () => {
    console.log(`Servidor da DevBurger rodando em localhost:${PORT}`);
});
