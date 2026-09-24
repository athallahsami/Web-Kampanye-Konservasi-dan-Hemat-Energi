fetch('data/data.json')
  .then(response => response.json())
  .then(data => {
    const ctx = document.getElementById('energyChart');
    if (!ctx) return;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [{
          label: 'Persentase (%)',
          data: data.values,
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: { y: { beginAtZero: true, max: 100 } }
      }
    });
  })
  .catch(error => console.error('Data gagal dimuat:', error));