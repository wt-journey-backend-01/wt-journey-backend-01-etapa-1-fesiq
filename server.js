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
/* enunciado a partir daqui ---
| ```/contato```| Serve a página de de contato (contato.html), que exibe um formulário para que os clientes possam enviar mensagens. | ```GET```| ```200```| arquivo contato.html. | - |

| ```/contato```| Recebe os dados do cliente e do contato fornecidos no formulário da página de contato. O servidor processa esses dados e exibe a página de contato recebido. | ```POST```| ```200```| págna HTML gerada dinamicamente contendo os dados do cliente passados no formulário. | Exemplo de payload abaixo |
--- enunciado até aqui*/

app.post('/contato', (req, res) => {
  const { nome, email, assunto, mensagem } = req.body;
  res.send(`
    <h1>Recebemos a sua sugestão, ${nome}. Obrigado!</h1>
    <p>Email: ${email}</p>
    <p>Assunto: ${assunto}</p>
  `);
});

app.get('/api/lanches', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'data', 'lanches.json'));
});

app.listen(PORT, () => {
    console.log(`Servidor da DevBurger rodando em localhost:${PORT}`);
});
