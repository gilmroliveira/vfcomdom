<form id="meuFormulario">
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome" required>
  <label for="email">E-mail:</label>
  <input type="email" id="email" name="email" required>
  <label for="telefone">Telefone:</label>
  <input type="text" id="telefone" name="telefone" required maxlength="11">
  <button type="submit">Enviar</button>
</form>
<script>
document.getElementById("meuFormulario").onsubmit = function(e) {
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let telefone = document.getElementById("telefone").value;
  let erros = [];
  if (nome.length < 5 || nome.length > 40) erros.push("Nome deve ter entre 5 e 40 caracteres.");
  if (!email.includes("@")) erros.push("E-mail deve conter '@'.");
  if (!(/^d{11}$/).test(telefone)) erros.push("Telefone deve ter 11 dígitos.");
  if (!nome || !email || !telefone) erros.push("Todos os campos devem ser preenchidos.");
  if (erros.length) {
    e.preventDefault();
    alert(erros.join("
"));
  }
};
</script>
