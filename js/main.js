$(document).ready(function() {
    // Inicializa o carrossel
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    });

    // Aplica máscaras aos campos de entrada
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    // Configura a validação do formulário
    $('#form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 5
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true,
                cpfBR: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true,
                cepBR: true
            }
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome completo",
                minlength: "Seu nome deve ter pelo menos 5 caracteres"
            },
            email: {
                required: "Por favor, insira seu e-mail",
                email: "Por favor, insira um e-mail válido"
            },
            telefone: {
                required: "Por favor, insira seu telefone"
            },
            cpf: {
                required: "Por favor, insira seu CPF",
                cpfBR: "Por favor, insira um CPF válido"
            },
            endereco: {
                required: "Por favor, insira seu endereço completo"
            },
            cep: {
                required: "Por favor, insira seu CEP",
                cepBR: "Por favor, insira um CEP válido"
            }
        },
        errorClass: 'error',
        submitHandler: function(form) {
            form.submit();
        }
    });
});
