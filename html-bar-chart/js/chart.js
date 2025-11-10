const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['EM PROJETO', 'EM OBRA', 'CONCLUÍDO'],
        datasets: [{
            label: 'Status',
            data: [12, 19, 7], // Example data values for each category
            backgroundColor: [
                'rgba(255, 165, 0, 0.6)', // Color for "EM PROJETO"
                'rgba(255, 0, 0, 0.6)',   // Color for "EM OBRA"
                'rgba(0, 128, 0, 0.6)'    // Color for "CONCLUÍDO"
            ],
            borderColor: [
                'rgba(255, 165, 0, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(0, 128, 0, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});