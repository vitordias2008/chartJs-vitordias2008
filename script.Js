
// Gráfico de linhas

const horarios = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

const dadosLinha = {
    labels: horarios,
    datasets: [
        {
            label: 'Temperatura (°C)',
            data: [30, 29, 28, 25, 22, 23],
            borderColor: '#f97316',
            backgroundColor: '#f97316',
            tension: 0.3
        },
        {
            label: 'Umidade (%)',
            data: [80, 82, 80, 85, 80, 83],
            borderColor: '#3b82f6',
            backgroundColor: '#3b82f6',
            tension: 0.3
        }
    ]
};

const configLinha = {
    type: 'line',
    data: dadosLinha
};

new Chart(
    document.getElementById('graficoLinha'),
    configLinha
);


// Gráfico de barras

const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'];

const dadosBarra = {
    labels: meses,
    datasets: [
        {
            label: 'Temperatura Média (°C)',
            data: [22, 24, 27, 23, 20, 18],
            backgroundColor: '#f97316'
        },
        {
            label: 'Umidade Média (%)',
            data: [90, 89, 93, 87, 88, 82],
            backgroundColor: '#3b82f6'
        }
    ]
};

const configBarra = {
    type: 'bar',
    data: dadosBarra
};

new Chart(
    document.getElementById('graficoBarra'),
    configBarra
);


// Gráfico do desafio - Rosca

const dadosRosca = {
    labels: meses,
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
            ]
        }
    ]
};

const configRosca = {
    type: 'doughnut',
    data: dadosRosca
};

new Chart(
    document.getElementById('graficoRosca'),
    configRosca
);
