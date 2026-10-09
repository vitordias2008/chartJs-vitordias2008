
// GRÁFICO DE LINHAS

const labelsLinha = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

const dataLinha = {
    labels: labelsLinha,
    datasets: [
        {
            label: 'Temperatura (°C)',
            data: [30, 29, 28, 25, 22, 23],
            backgroundColor: '#f97316',
            borderColor: '#f97316',
            tension: 0.3
        },
        {
            label: 'Umidade (%)',
            data: [80, 82, 80, 85, 80, 83],
            backgroundColor: '#3b82f6',
            borderColor: '#3b82f6',
            tension: 0.3
        }
    ]
};

const configLinha = {
    type: 'line',
    data: dataLinha,
    options: {}
};

new Chart(
    document.getElementById('graficoLinha'),
    configLinha
);


// GRÁFICO DE BARRAS

const labelsBarra = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'];

const dataBarra = {
    labels: labelsBarra,
    datasets: [
        {
            label: 'Temperatura Média (°C)',
            data: [22, 24, 27, 23, 20, 18],
            backgroundColor: '#f97316',
            borderColor: '#f97316'
        },
        {
            label: 'Umidade Média (%)',
            data: [90, 89, 93, 87, 88, 82],
            backgroundColor: '#3b82f6',
            borderColor: '#3b82f6'
        }
    ]
};

const configBarra = {
    type: 'bar',
    data: dataBarra,
    options: {}
};

new Chart(
    document.getElementById('graficoBarra'),
    configBarra
);


// GRÁFICO DO DESAFIO - DOUGHNUT

const labelsRosca = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'];

const dataRosca = {
    labels: labelsRosca,
    datasets: [
        {
            label: 'Temperatura Média (°C)',
            data: [22, 24, 27, 23, 20, 18],
            backgroundColor: [
                '#2563eb',
                '#3b82f6',
                '#60a5fa',
                '#f97316',
                '#fb923c',
                '#fdba74'
            ],
            hoverOffset: 4
        }
    ]
};

const configRosca = {
    type: 'doughnut',
    data: dataRosca,
    options: {}
};

new Chart(
    document.getElementById('graficoRosca'),
    configRosca
);
