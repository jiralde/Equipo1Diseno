document.addEventListener('DOMContentLoaded', function() {
    const dataForm = document.getElementById('dataForm');
    const dataTable = document.getElementById('dataTable');

    dataForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;

        // Enviar los datos al servidor
        fetch('insertar.php', {
            method: 'POST',
            body: JSON.stringify({ nombre, correo }),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => {
            // Manejar la respuesta (puede incluir la actualización de la tabla)
            // ...
        });
    });

    // Recuperar datos de la base de datos
    fetch('mostrar.php')
    .then(response => response.json())
    .then(data => {
        data.forEach(row => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `<td>${row.nombre}</td><td>${row.correo}</td>`;
            dataTable.querySelector('tbody').appendChild(newRow);
        });
    });
});
