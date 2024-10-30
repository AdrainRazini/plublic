// Importando o módulo Express
const express = require('express');
const path = require('path');

// Criando uma instância do Express
const app = express();

// Definindo a porta
const PORT = process.env.PORT || 3000;

// Servindo arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na http://localhost:${PORT}`);
});
