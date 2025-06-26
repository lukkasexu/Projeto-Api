<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>API de Gerenciamento de Hotel</title>
</head>
<body>
<h1>API de Gerenciamento de Hotel</h1>

<p><strong>Descrição:</strong></p>
<p>Esta API simula um sistema simples de gerenciamento de quartos e reservas em um hotel. Permite criar quartos, fazer reservas, cancelar reservas e verificar quartos disponíveis.</p>

<h2>Funcionalidades</h2>
<ul>
  <li>Criar e listar quartos</li>
  <li>Reservar um quarto</li>
  <li>Liberar (cancelar reserva) um quarto</li>
  <li>Buscar o primeiro quarto livre disponível</li>
</ul>

<h2>Como usar a API</h2>

<h3>Pré-requisitos</h3>
<ul>
  <li>Ter o <a href="https://www.oracle.com/java/technologies/javase-downloads.html" target="_blank">Java JDK</a> instalado na sua máquina.</li>
  <li>Ter o <a href="https://www.postman.com/downloads/" target="_blank">Postman</a> ou outra ferramenta de requisições HTTP para testar os endpoints.</li>
  <li>(Opcional) Rodar a aplicação localmente usando seu IDE ou terminal.</li>
</ul>

<h3>Executando localmente</h3>
<ol>
  <li>Clone ou copie o seu código.</li>
  <li>Compile o projeto (exemplo usando terminal/linha de comando):
<pre><code>javac *.java</code></pre></li>
  <li>Inicie a aplicação:
<pre><code>java NomeDaClassePrincipal</code></pre></li>
</ol>
<p>*Certifique-se de que sua classe principal seja a que inicia o servidor ou o main de seu projeto.*</p>

<h3>Endpoints disponíveis</h3>
<table border="1" cellpadding="5" cellspacing="0">
  <thead>
    <tr>
      <th>Método</th>
      <th>URL</th>
      <th>Descrição</th>
      <th>Exemplo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>http://localhost:3000/quartos</td>
      <td>Lista todos os quartos do hotel</td>
      <td>-</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>http://localhost:3000/quartos/livre</td>
      <td>Retorna o primeiro quarto livre disponível</td>
      <td>-</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>http://localhost:3000/reservar</td>
      <td>Reservar um quarto (envie o JSON do quarto)</td>
      <td>
<pre><code>{
  "numero": 101,
  "valorDiaria": 200
}</code></pre>
      </td>
    </tr>
    <tr>
      <td>POST</td>
      <td>http://localhost:3000/liberar</td>
      <td>Liberar um quarto (envie o JSON do quarto)</td>
      <td>
<pre><code>{
  "numero": 101
}</code></pre>
      </td>
    </tr>
  </tbody>
</table>

<h3>Exemplo de requisições</h3>

<h4>Reservar um Quarto</h4>
<pre><code>POST /reservar
{
  "numero": 101,
  "valorDiaria": 200
}</code></pre>

<h4>Liberar um Quarto</h4>
<pre><code>POST /liberar
{
  "numero": 101
}</code></pre>

<h2>Observações</h2>
<ul>
  <li>Antes de fazer uma reserva, verifique a disponibilidade do quarto usando <code>GET /quartos/livre</code>.</li>
  <li>Os endpoints de reserva e liberação aguardam o JSON com os detalhes do quarto.</li>
</ul>

<h2>Contribuição</h2>
<p>Se desejar contribuir, faça um fork do repositório, crie uma branch para sua feature ou correção e envie um pull request.</p>

<h2>Contato</h2>
<p>Para dúvidas ou sugestões, entre em contato pelo email: <a href="mailto:seuemail@dominio.com">seuemail@dominio.com</a></p>

</body>
</html>
