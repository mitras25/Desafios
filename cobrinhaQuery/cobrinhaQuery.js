$(function () {
    $("#final").hide()
    $('#campoJogo').hide()

    $('#botaoInicia').click(function () {
        var cobrinhaPosicao
        var cobrinhaCorpo
        var posicaoComida
        var excluido
        var listaCampo = []
        var tamanho
        var tamDiv
        var tamanhoCampo

//mudando o tamnho do campo de jogo
       var nivelJogo = $('#nivelJogo').val()
          
        if (nivelJogo === 'normal') {
            tamanho = 10
            tamDiv = '30px'
            tamanhoCampo = '300px'
            $('#inicial').hide()
            $('#campoJogo').show()           
        } else if (nivelJogo === 'dificil') {
            tamanho = 20
            tamDiv = '20px'
            tamanhoCampo = '400px'
            $('#inicial').hide()
            $('#campoJogo').show()
        } else if (nivelJogo === 'hard') {
            tamanho = 30
            tamDiv = '20px'
            tamanhoCampo = '600px'
            $('#inicial').hide()
            $('#campoJogo').show()
        }else{
            alert('escolha um tamanho')
    
        }
 

        let tam = tamanho * tamanho

        $()

        for (let i = 0; i < tam; i++) {
            let ide = i
            let campo = document.createElement('div')
            campo.style.width = tamDiv
            campo.style.height = tamDiv
            campo.className = 'campo'
            campo.id = ide
            document.getElementById('campoJogo').appendChild(campo)
       

        }

        let campoJogo = document.getElementById('campoJogo')
        campoJogo.style.width = tamanhoCampo

        //iniciando a cobrinha
        cobrinhaPosicao = Math.floor(Math.random() * tam)
        let inicio = document.getElementById(cobrinhaPosicao).className = 'cobrinha'
        listaCampo.push(cobrinhaPosicao)
        document.addEventListener('keydown', moveCobrinha)
        apareceComida()


        //aparecer a frutinha
        function apareceComida() {
            do {
                posicaoComida = Math.floor(Math.random() * tam)
            } while (listaCampo.indexOf(posicaoComida) != -1)
            document.getElementById(posicaoComida).className = 'comida'
        }



        function moveCobrinha(elemento) {
            if (elemento.key == 'ArrowRight') {
                if (posicaoComida == cobrinhaPosicao) {
                    comeFrutinha()
                } else {
                    novaPosicao = cobrinhaPosicao + 1
                    if (listaCampo.indexOf(novaPosicao) == -1) {
                        if (novaPosicao < tam) {
                            voltaClasse()
                        } else {
                            novaPosicao = 0
                            voltaClasse()
                        }
                    } else {
                        document.getElementById(novaPosicao).className = 'cobrinhaCorpo'
                       $('#campoJogo').hide()
                       $('#final').show()

                    }

                }
            } else if (elemento.key == 'ArrowLeft') {
                if (posicaoComida == cobrinhaPosicao) {
                    comeFrutinha()
                } else {
                    novaPosicao = cobrinhaPosicao - 1
                    if (listaCampo.indexOf(novaPosicao) == -1) {
                        if (novaPosicao >= 0) {
                            voltaClasse()
                        } else {
                            novaPosicao = tam - 1
                            voltaClasse()
                        }
                    } else {
                        document.getElementById(novaPosicao).className = 'cobrinhaCorpo'
                        $('#campoJogo').hide()
                        $('#final').show()

                    }

                }
            } else if (elemento.key == 'ArrowDown') {
                if (posicaoComida == cobrinhaPosicao) {
                    comeFrutinha()
                } else {
                    novaPosicao = cobrinhaPosicao + tamanho
                    if (listaCampo.indexOf(novaPosicao) == -1) {
                        if (novaPosicao <= tam - 1) {
                            voltaClasse()
                        } else {
                            novaPosicao -= tam
                            voltaClasse()
                        }
                    } else {
                        document.getElementById(novaPosicao).className = 'cobrinhaCorpo'
                        $('#campoJogo').hide()
                        $('#final').show()

                    }

                }
            } else if (elemento.key == 'ArrowUp') {
                if (posicaoComida == cobrinhaPosicao) {
                    comeFrutinha()
                } else {
                    novaPosicao = cobrinhaPosicao - tamanho
                    if (listaCampo.indexOf(novaPosicao) == -1) {
                        if (novaPosicao >= 0) {
                            voltaClasse()
                        } else {
                            novaPosicao += tam
                            voltaClasse()
                        }
                    } else {
                        document.getElementById(novaPosicao).className = 'cobrinhaCorpo'
                        $('#campoJogo').hide()
                        $('#final').show()

                    }
                }
            }
        }

        function comeFrutinha() {
            // listaCampo.push(excluido)
            document.getElementById(posicaoComida).className = 'cobrinha'
            // document.getElementById(excluido).className = 'cobrinha'
            listaCampo.push(excluido)

            apareceComida()
        }

        function voltaClasse() {
            listaCampo.unshift(novaPosicao)
            excluido = listaCampo.pop()
            document.getElementById(excluido).className = 'campo'
            cobrinhaPosicao = novaPosicao
            document.getElementById(novaPosicao).className = 'cobrinha'     
        }
    })

})