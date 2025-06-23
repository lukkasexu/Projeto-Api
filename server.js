const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let tarefas = [];
let idAtual = 1;


app.get('/tarefas', (req, res) => {
  res.json(tarefas);
});


app.post('/tarefas', (req, res) => {
  const { titulo, descricao } = req.body;
  const novaTarefa = {
    id: idAtual++,
    titulo,
    descricao,
    concluida: false
  };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});


app.put('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tarefa = tarefas.find(t => t.id === id);

  if (!tarefa) {
    return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
  }

  const { titulo, descricao, concluida } = req.body;
  if (titulo !== undefined) tarefa.titulo = titulo;
  if (descricao !== undefined) tarefa.descricao = descricao;
  if (concluida !== undefined) tarefa.concluida = concluida;

  res.json(tarefa);
});


app.delete('/tarefas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  tarefas = tarefas.filter(t => t.id !== id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
