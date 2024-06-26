const form = document.getElementById('form-atividade')
const imgAprovado = '<img src="./imagens/aprovado.png" alt="Emoji Celebrando" />'
const imgReprovado = '<img src="./imagens/reprovado.png" alt="Emoji Decepcionado" />'
const atividades = []
const notas = []
cosnt = spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
cosnt = spanReprovado = '<span class="resultado Reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt("Digite a nota mínima:"))

let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
}) 

function adicionaLinha () {
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`)
    } else {
        atividades.push(inputNomeAtividade.value)
        notas.push(parseFloat(inputNotaAtividade.value))
    
        let linha = '<tr>'
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += `</tr>`
    
        linhas += linha
    }

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal() {
    const mediaFInal = calculaMediaFinal()

    document.getElementById('media-final-valor').innerHTML = mediaFInal.toFixed(2) //tofixed limita pra duas casas decimais
    document.getElementById('media-final-resultado').innerHTML = mediaFInal >= notaMinima ? spanAprovado : spanReprovado
}

function calculaMediaFinal() {
    let somaDasNotas = 0

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length
}