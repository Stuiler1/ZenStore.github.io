// Datos de la susodicha tabla
var ventas = [
    { producto: "Refrigeradora", cantidad: 0, precioUnitario: 100 },
    { producto: "Lavadora", cantidad: 0, precioUnitario: 50 },
    { producto: "Cafetera", cantidad: 0, precioUnitario: 200 }
  ];
  
  // Función para agregar las filas de la mendiga tabla :'v
  function generarFilasTabla() {
    var tbody = document.querySelector('#tablaVentas tbody');
    ventas.forEach(function(venta, index) {
      var total = venta.cantidad * venta.precioUnitario;
      var fila = `
        <tr data-index="${index}">
          <td>${venta.producto}</td>
          <td><input class="cantidadInput" type="number" min="1" max="100" value="${venta.cantidad}"></td>
          <td>${venta.precioUnitario}</td>
          <td class="total">${total}</td>
        </tr>
      `;
      tbody.innerHTML += fila;
    });
  }
  
  // Función para actualizar el valor total y el precio al modificar la fila cantidad
  function actualizarTotalYPrecio() {
    var filas = document.querySelectorAll('#tablaVentas tbody tr');
    filas.forEach(function(fila) {
      var cantidadInput = fila.querySelector('.cantidadInput');
      var totalCell = fila.querySelector('.total');
      var index = fila.getAttribute('data-index');
      cantidadInput.addEventListener('change', function() {
        var cantidad = parseInt(cantidadInput.value);
        if (cantidad > 100) {
          cantidad = 100; 
          cantidadInput.value = 100;
        }
        ventas[index].cantidad = cantidad;
        var total = ventas[index].cantidad * ventas[index].precioUnitario;
        totalCell.textContent = total;
        mostrarTotalVentas();
      });
    });
  }
  
  // Función para calcular el total de todas las ventas 
  function calcularTotalVentas() {
    var totalVentas = 0;
    ventas.forEach(function(venta) {
      totalVentas += venta.cantidad * venta.precioUnitario;
    });
    return totalVentas;
  }
  
  // Función para mostrar el total de ventas en la página
  function mostrarTotalVentas() {
    var totalVentas = calcularTotalVentas();
    var totalVentasElement = document.getElementById('totalVentas');
    totalVentasElement.textContent = `Total de Ventas: S/${totalVentas.toFixed(2)}`;
  }
  
  // Llamar a las funciones para generar las filas de la tabla, actualizar el total y mostrar el total de ventas
  generarFilasTabla();
  actualizarTotalYPrecio();
  mostrarTotalVentas();