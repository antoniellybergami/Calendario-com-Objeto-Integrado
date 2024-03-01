//criação do objeto calendário
let calendario = {
    mesAtual: new Date(), //cria uma instancia do objeto data
    diasDaSemana: ["Dom", "Seg", "Ter", "Quar", "Qui", "Sex", "Sab"],
    diasDoMes: [], //gerar os dias por função

    //retorna o nome do mês atual
    nomeMesAtual: function () {
        const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        return meses[this.mesAtual.getMonth()]; //getMouth faz parte do objeto date e retorna um número de 0 a 11 de acordo com o mês, e ai vai pegar o mês compativel na lista 
    },

    //gera um array com os dias do mês atual
    diasDoMesAtual: function () {
        //this.diasDoMes[];
        const diaPrimeiro = new Date (this.mesAtual.getFullYear(), this.mesAtual.getMonth(), 1); //ano, mês e dia, nessa caso, dia primeiro, e dia da semana
        const ultimoDia = new Date  (this.mesAtual.getFullYear(), this.mesAtual.getMonth() +1, 0); //ano, prox mes, ao colocar 0 o construtor date automáticamente coloca o último dia para o mês especificado
        let hoje = diaPrimeiro;

        while (hoje <= ultimoDia) {
            this.diasDoMes.push(hoje.getDate()); //adciona o dia atual ao array de dias do mês - getDate retorna p dia do mês 
            hoje = new Date (hoje.getFullYear(), hoje.getMonth(), hoje.getDate() +1); //pega o "amanhã"
        }
    
    },
    
    //exibir o calendário
    mostraCalendario: function () {
        const containerCalendario = document.querySelector("#calendario"); //pega o elemento no HTML com o id calendario
        //containerCalendario.innerHTML = ""; // innerHTML define o conteúdo HTML interno de um elemento  (ou substitiu), nesse caso vazio

        //coloca o nome do mês no html
        const spanNomeMes = document.querySelector("#nomeMes");
        spanNomeMes.textContent = this.nomeMesAtual();

        //Dias da semana
        const tabelaDiasSemana = document.createElement("table"); //cria um elemento table no html
        const trDiasSemana = document.createElement("tr"); //cria um elemento table row (linhas de células)

        
        //itera para preencher a tabela de dias da semana
        this.diasDaSemana.forEach((dia) => { //itera em cada elemento de dias da sema
            const thDiaSemana = document.createElement("th"); //table headedr - define uma célula como cabeçalho
            thDiaSemana.textContent = dia; //define o texto do elemento

            trDiasSemana.appendChild(thDiaSemana); //insere o elemento thDiaSemana como filho de trDiasSemana
          });


        tabelaDiasSemana.appendChild(trDiasSemana); //coloca o elemento que contém os dias da semana como filho da tabela de dias da semana
        containerCalendario.appendChild(tabelaDiasSemana); //insere o elemento tabelaDiasDaSemana como filho do container calendario
          /**<div id="calendario">
                <table>
                    <tr>
                    <th>Segunda-feira</th>
                    <th>Terça-feira</th>
                    <th>Quarta-feira</th>
                    <th>Quinta-feira</th>
                    <th>Sexta-feira</th>
                    <th>Sábado</th>
                    <th>Domingo</th>
                    </tr>
                </table>
            </div> */

        //itera para preencher os dias do mês
        const tabelaDias = document.createElement("table");
        let trDias = document.createElement("tr"); //cria um elemento table row 
        //let cont = 0;

        let cont = this.mesAtual.getDay(); // pra começar no dia da semana certo que o mês começou

        //para começar no dia da semana que o mês começou
        for(let j = 0; j<cont; j++){
            const tdDiaVazio = document.createElement("td");
            tdDiaVazio.textContent = "";
            trDias.appendChild(tdDiaVazio);
        }

        //de 1 a 31 
        for (let i = 0; i<this.diasDoMes.length; i++){
            const tdDiasMes = document.createElement("td");  //célula com informação
            tdDiasMes.textContent = this.diasDoMes[i]; //define o texto 
            trDias.appendChild(tdDiasMes);
            cont++;

            //quebra quando chega no 7
            if (cont == 7) { //7 dias da semana
                tabelaDias.appendChild(trDias);
                trDias = document.createElement("tr"); //cria um elemento linhas
                cont = 0;
            }
        }

        if (cont > 0) {
            for (let i = cont; i < 7; i++) {
                const tdDia = document.createElement("td"); //célula com informação
                tdDia.textContent = ""; //dia vazio
                trDias.appendChild(tdDia); 
            }
            tabelaDias.appendChild(trDias);
        }
        containerCalendario.appendChild(tabelaDias);
    },

    /*navegarMes: function (direcao) {
        const mesAtual = this.mesAtual.getMonth();
        if (direcao === "anterior") {
          this.mesAtual = new Date(this.mesAtual.getFullYear(), mesAtual - 1, 1);
        } else if (direcao === "proximo") {
          this.mesAtual = new Date(this.mesAtual.getFullYear(), mesAtual + 1, 1);
        }
        this.gerarDiasDoMes();
        this.exibirCalendario();
      },*/
    
}
   

    /* Botões de navegação
    const botaoAnterior = document.querySelector("#anterior");
    botaoAnterior.addEventListener("click", () => calendario.navegarMes("anterior"));

    const botaoProximo = document.querySelector("#proximo");
    botaoProximo.addEventListener("click", () => calendario.navegarMes("proximo")); */


// Inicialização
calendario.diasDoMesAtual();
calendario.mostraCalendario();



