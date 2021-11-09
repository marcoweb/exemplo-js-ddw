// Vincula uma ação ao evento "onclick" do botão "btnConsultar"
document.querySelector("#btnConsultar").onclick = function() {
    // Captura o valor asssociado ao campo "cep" (textbox) e guarda em uma variável chamada "cep"
    let cep = document.querySelector("#cep").value
    // Realiza uma consulta à API do viacep passando o valor do "cep" na url
    fetch("https://viacep.com.br/ws/" + cep + "/json/", {
        // Define o método HTTP à ser utilizado
        method: 'GET',
        // Define no cabeçalho da requisição que o valor de retorno será um arquivo json
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    // Quando um valor for retornado pela consulta, executa a função a seguir
    }).then(function(response) {
        // Converte o arquivo json recebido em um objeto javascript e processa
        response.json().then(function(data) {
            // Imprime no elemento "cidade" (span) o valor da localidade que foi recebida no arquivo json
            document.querySelector("#cidade").innerHTML = data['localidade']
        })
    })
}



