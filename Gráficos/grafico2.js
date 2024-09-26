import { getCSS, tickConfig } from "./common.js "

async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = ['Amazonas','Bahia','Mato Grosso do Sul','Pernambuco','Roraima','Pará','Mato Grosso','Maranhão','Ceará','São Paulo','Minas Gerais','Rio Grande do sul','Acre','Paraná','Paráiba','Alagoas','Santa Catarina','Rondônia','Tocantins','Goiás','Rio de Janeiro','Espírito Santo','Rio Grande do Norte','Amapá','piauí','Distrito Federal','Sergipe']
    const quantidadeUsuarios = ['490854','229103','116346','106634','97320','80974','58231','57214','56353','55295','36699','36096','31699','30460','30140','25725','21541','21153','20023','19522','16964','14411','11725','11334','7198','5813','4708']
    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeUsuarios,
            type: 'bar',
            marker: {
                color: getCSS('--cor-barra')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--cor-de-fundo'),
        paper_bgcolor: getCSS('--cor-de-fundo'),
        title: {
            text: 'Redes sociais com mais usuários no mundo',
            font: {
                color: getCSS('--cor-principal'),
                family: getCSS('--fonte'),
                size: 30
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Estado',
                font: {
                    color: getCSS('--cor-secundaria')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Bilhões de usuários ativos',
                font: {
                    color: getCSS('--cor-secundaria')
                }
            }

        }

    }
    const grafico = document.createElement('div')
    grafico.className - 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)

}

quantidadeUsuarios()