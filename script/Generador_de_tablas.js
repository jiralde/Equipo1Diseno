
tabla = `<table style="width:100%" class="TextoBlanco">
                            <tr>
                                <th>Palabra</th>
                                <th>Definicion</th>
                                <th>Ejemplo</th>
                            </tr>

                            <tr>
                                <td inpuit>input</td>
                                <td>sasas</td>
                                <td>sasa</td>
                            </tr>

                        </table>`

let opcion = prompt("+1 para generar tabla +0 para no generar nada")
if(opcion == "+1"){
    document.write(tabla);
} else{
    alert(":(");
}
