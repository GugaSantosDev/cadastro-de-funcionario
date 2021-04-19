const botaoSalvar = document.querySelector('.salvar');
const botaoRemover = document.querySelector('.remover');
const botaoEditar = document.querySelector('.editar');
const tabela = document.querySelector('.datatable');
const tbody = document.querySelector('.tbody');
const inputs = document.querySelectorAll('inputs');
const alerta = document.querySelector('.alerta');

let idDeFuncionario = 0;

function adicionarFuncionario(e) {
    const inputs = document.querySelectorAll('input');
    let tr = `<tr>`;

    let contadorTR = 0;
    let nEmptyInput = 0;

    inputs.forEach(function (input) {
        if (input.type !== 'button') {
            if (
                input.value === '' ||
                input.value === null ||
                input.value === undefined
            )
                nEmptyInput++;

            tr += `<td>${input.value}</td>`;
        }
    });

    if (nEmptyInput > 0) {
        alerta.style.display = 'block';
        return;
    } else {
        alerta.style.display = 'none';
        console.log(idDeFuncionario++);
        contadorTR++;
    }

    tr += `<td><button 
                class='editar'; 
                id='editar'>
                Editar
                </button>
            <button 
                class='remover'; 
                id='remover' 
                onclick='excluirFuncionario(-1, ${idDeFuncionario})'>
                Remover
                </button></td>`;

    tr += `</tr>`;

    const trElement = document.createElement('tr');
    trElement.innerHTML = tr;
    trElement.setAttribute('id', `${idDeFuncionario}`);

    document.querySelector('tbody').appendChild(trElement);

    inputs.forEach(function (input) {
        if (input.type !== 'button') {
            input.value = '';
        }
    });
}

function excluirFuncionario(index) {
    document.getElementById('tbody').deleteRow(index);
}
