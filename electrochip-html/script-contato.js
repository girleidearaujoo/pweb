const form_contato = document.getElementById('myForm');

form_contato.addEventListener('submit', function (event) {
            event.preventDefault(); // Evita o envio padrão do formulário

            // Captura os valores dos campos
            const nome = document.getElementById('nomeInput').value;
            const email = document.getElementById('emailInput').value;
            const telefone = document.getElementById('telefoneInput').value;
            const mensagem = document.getElementById('msgInput').value;

            // Cria um objeto com os dados do formulário
            const formData = {
                nome,
                email,
                telefone,
                mensagem
            };

            // Converte o objeto em uma string JSON
            const formDataString = JSON.stringify(formData);

            // Armazena os dados no localStorage
            localStorage.setItem('formData', formDataString);

            // Opcional: Exibe uma mensagem de confirmação
            alert('Dados do formulário salvos com sucesso!');
});