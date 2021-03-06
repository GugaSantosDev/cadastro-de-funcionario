const botaoSalvar = document.querySelector('.salvar');
const botaoRemover = document.querySelector('.remover');
const botaoEditar = document.querySelector('.editar');
const tabela = document.querySelector('.datatable');
const tbody = document.querySelector('.tbody');
const inputs = document.querySelectorAll('inputs');
const alerta = document.querySelector('.alerta');
totalFuncionario = 0;
function adicionarFuncionario(e) {
    const inputs = document.querySelectorAll('input');
    let tr = `<tr>`;

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
        //totalFuncionario++;
        // console.log({ totalFuncionario });
    }

    tr += `<td>
                <button 
                    class='editar'
                    id='editar'
                >
                    Editar
                </button>
                <button 
                    class='remover'; 
                    id='remover' 
                    onclick='excluirFuncionario(this)'
                >
                    Remover
                </button>
            </td>`;

    tr += `</tr>`;

    const trElement = document.createElement('tr');
    trElement.innerHTML = tr;
    trElement.setAttribute('id', `${totalFuncionario}`);

    document.querySelector('tbody').appendChild(trElement);

    inputs.forEach(function (input) {
        if (input.type !== 'button') {
            input.value = '';
        }
    });
}

function excluirFuncionario(button) {
    const tr = button.parentNode.parentNode;
    document.getElementById('tbody').deleteRow(tr.rowIndex - 1);
}
