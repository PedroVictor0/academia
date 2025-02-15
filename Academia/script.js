// Definição da classe Pessoa
class Pessoa {
    // Construtor da classe Pessoa
    constructor(nome, dataNascimento, cpf) {
        this.nome = nome; // Atributo para armazenar o nome da pessoa
        this.dataNascimento = dataNascimento; // Atributo para armazenar a data de nascimento da pessoa
        this.cpf = cpf; // Atributo para armazenar o CPF da pessoa
        this.idade = this.calcularIdade(dataNascimento); // Atributo para armazenar a idade da pessoa, calculada com base na data de nascimento
    }

    // Método para calcular a idade com base na data de nascimento
    calcularIdade(dataNascimento) {
        let hoje = new Date(); // Obtém a data atual
        let nascimento = new Date(dataNascimento); // Converte a data de nascimento para um objeto Date
        let idade = hoje.getFullYear() - nascimento.getFullYear(); // Calcula a diferença entre os anos
        let mes = hoje.getMonth() - nascimento.getMonth(); // Calcula a diferença entre os meses
        if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) { // Verifica se ainda não fez aniversário neste ano
            idade--; // Se ainda não fez aniversário, subtrai 1 da idade
        }
        return idade; // Retorna a idade calculada
    }

    // Método para validar o CPF
    validarCPF(cpf) {
        cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos do CPF
        if (cpf.length !== 11 || cpf.match(/(\d)\1{10}/)) return false; // Verifica se o CPF possui 11 dígitos e se não é uma sequência repetida
        let soma = 0;
        for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i); // Calcula a soma dos dígitos do CPF
        let resto = 11 - (soma % 11); // Calcula o primeiro dígito verificador
        if (resto === 10 || resto === 11) resto = 0; // Se o resto for 10 ou 11, o dígito verificador é 0
        if (resto !== parseInt(cpf.charAt(9))) return false; // Verifica se o primeiro dígito verificador é válido
        soma = 0;
        for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i); // Calcula novamente a soma dos dígitos do CPF
        resto = 11 - (soma % 11); // Calcula o segundo dígito verificador
        if (resto === 10 || resto === 11) resto = 0; // Se o resto for 10 ou 11, o dígito verificador é 0
        if (resto !== parseInt(cpf.charAt(10))) return false; // Verifica se o segundo dígito verificador é válido
        return true; // Retorna verdadeiro se o CPF for válido
    }
}

// Função para realizar o cadastro do usuário   
function CadastroUsuario() {
    let nome = document.getElementById("Nome").value; // Obtém o valor do campo "Nome" do formulário
    let dataNascimento = document.getElementById("DataNascimento").value; // Obtém o valor do campo "DataNascimento" do formulário
    let cpf = document.getElementById("CPF").value; // Obtém o valor do campo "CPF" do formulário

    if (nome === '' || dataNascimento === '' || cpf === '') { // Verifica se algum campo está vazio
    alert("Preencha todos os campos"); // Exibe um alerta se algum campo estiver vazio
    } else {
        let pessoa = new Pessoa(nome, dataNascimento, cpf); // Cria um novo objeto Pessoa com os dados fornecidos pelo usuário
        if (!pessoa.validarCPF(cpf)) { // Verifica se o CPF fornecido é válido
        alert("CPF inválido"); // Exibe um alerta se o CPF não for válido
        } else if (pessoa.idade <= 0 || pessoa.idade > 120) { // Verifica se a idade está dentro do intervalo aceitável
        alert("Você não esta na idade adequada"); // Exibe um alerta se a idade não estiver dentro do intervalo aceitável
        } else if (pessoa.idade !== pessoa.calcularIdade(pessoa.dataNascimento)){
        alert("Sua idade não condiz com a data de nascimento")
        } else {
            // Aqui você pode adicionar qualquer outra lógica que desejar
            // Por exemplo, enviar os dados para uma API ou redirecionar para outra página
            // Neste exemplo, redirecionamos para "pag.html"
            window.location.replace("pag.html");
        }
    } 
}


class Professor extends Pessoa{
    
    constructor(nome, dataNascimento, idade, cpf){
        super(nome, dataNascimento, idade, cpf)
    }

        


}

