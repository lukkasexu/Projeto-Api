<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>API de Tarefas - Node.js com Express</title>
</head>
<body>
<h1>API de Tarefas - Node.js com Express</h1>

<p><strong>Descrição:</strong></p>
<p>Esta API foi desenvolvida com Node.js e Express para gerenciar tarefas. Ela permite criar, listar, atualizar e excluir tarefas usando endpoints RESTful.</p>

<h2>Funcionalidades</h2>
<ul>
<li>Listar todas as tarefas</li>
<li>Criar uma nova tarefa</li>
<li>Atualizar uma tarefa existente</li>
<li>Remover uma tarefa</li>
</ul>

<h2>Como usar</h2>
<h3>Pré-requisitos</h3>
<ul>
<li>Ter o <a href="https://nodejs.org/" target="_blank">Node.js</a> instalado</li>
<li>Ter alguma ferramenta de requisições HTTP como <a href="https://www.postman.com/downloads/" target="_blank">Postman</a> ou usar cURL</li>
</ul>

<h3>Executando a API</h3>
<ol>
<li>Criar um arquivo chamado, por exemplo, <code>app.js</code>, colar o seu código nele.</li>
<li>Na pasta onde está o arquivo, abrir o terminal e rodar:
<pre><code>node app.js</code></pre></li>
<li>A API estará disponível na porta 3000.</li>
</ol>

<h3>Endpoints disponíveis</h3>
<table border="1" cellpadding="5" cellspacing="0">
  <thead>
    <tr>
      <th>Método</th>
      <th>URL</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>http://localhost:3000/tarefas</td>
      <td>Listar todas as tarefas</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>http://localhost:3000/tarefas</td>
      <td>Criar uma nova tarefa (enviar JSON com título e descrição)</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>http://localhost:3000/tarefas/:id</td>
      <td>Atualizar uma tarefa pelo ID</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>http://localhost:3000/tarefas/:id</td>
      <td>Excluir uma tarefa pelo ID</td>
    </tr>
  </tbody>
</table>

<h3>Exemplos de requisições</h3>
<h4>Criar tarefa</h4>
<pre><code>curl -X POST http://localhost:3000/tarefas \
-H "Content-Type: application/json" \
-d '{"titulo": "Estudar Node.js", "descricao": "Revisar API com Express"}'
</code></pre>

<h4>Atualizar tarefa (exemplo com ID 1)</h4>
<pre><code>curl -X PUT http://localhost:3000/tarefas/1 \
-H "Content-Type: application/json" \
-d '{"concluida": true}'
</code></pre>

<h4>Excluir tarefa (exemplo com ID 1)</h4>
<pre><code>curl -X DELETE http://localhost:3000/tarefas/1
</code></pre>

<h2>Contato</h2>
<p>Para dúvidas ou sugestões: <a href="Lucas.matos11@aluno.ifce.edu.br">Lucas.matos11@aluno.ifce.edu.br.</a></p>

</body>
</html>
