const agregarFila = () => {
    document.getElementById('tablaprueba').insertRow(-1).innerHTML = '<td><input type="text"></td><td><input type="text"></td><td><input type="text"></td><td><input type="text"></td>';
  }
  
  const eliminarFila = () => {
    const table = document.getElementById('tablaprueba');
    const rowCount = table.rows.length;
    
    if (rowCount <= 1){
      alert('No se puede eliminar el encabezado');
    }else{
      table.deleteRow(rowCount -1);
    }
}

const guardarT = () => {
    document.write(document.getElementById('tablaprueba'));
}

const hola = () => {
  alert('hola :)');
}