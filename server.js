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

app.get('/api/lanches', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'data', 'lanches.json'));
});

app.listen(PORT, () => {
    console.log(`Servidor da DevBurger rodando em localhost:${PORT}`);
});
