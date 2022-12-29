const form = document.getElementById('form-contato');
const contatos = [];
const telefoneContato = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

    function adicionaLinha() {
        const nome = document.getElementById('nome-contato');
        const telefone = document.getElementById('numero-contato');

        if ((contatos.includes(nome.value))||(telefoneContato.includes(telefone.value))) {
            alert(`Nome ${nome.value} ou ${telefone.value} já cadastrado.`);
        } else {
            contatos.push(nome.value);
            telefoneContato.push(telefone.value);

            let linha = '<tr>';
            linha += `<td>${nome.value}</td>`;
            linha += `<td>${telefone.value}</td>`;
            linha += '</tr>';

            linhas += linha;
        }

        nome.value = '';
        telefone.value = '';
    }   

    function atualizaTabela() {
        const tabela = document.querySelector('tbody');
        tabela.innerHTML = linhas;
    }
