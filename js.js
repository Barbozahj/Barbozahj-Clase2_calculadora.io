function sumar() {
    const operando1 = parseFloat(document.getElementById('operando1').value);
    const operando2 = parseFloat(document.getElementById('operando2').value);
    const resultado = operando1 + operando2;
    document.getElementById('resultado').value = resultado;
  }
  
  function restar() {
    const operando1 = parseFloat(document.getElementById('operando1').value);
    const operando2 = parseFloat(document.getElementById('operando2').value);
    const resultado = operando1 - operando2;
    document.getElementById('resultado').value = resultado;
  }
  
  function multiplicar() {
    const operando1 = parseFloat(document.getElementById('operando1').value);
    const operando2 = parseFloat(document.getElementById('operando2').value);
    const resultado = operando1 * operando2;
    document.getElementById('resultado').value = resultado;
  }
  
  function dividir() {
    const operando1 = parseFloat(document.getElementById('operando1').value);
    const operando2 = parseFloat(document.getElementById('operando2').value);
    const resultado = operando1 / operando2;
    document.getElementById('resultado').value = resultado;
  }

  function clearDisplay() {
    document.getElementById('resultado').value = '';
    document.getElementById('operando1').value = '';
    document.getElementById('operando2').value = '';
}
  