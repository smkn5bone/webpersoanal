function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function backspace() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch (e) {
    alert('Kesalahan dalam perhitungan');
  }
}

function applyFunction(func) {
  const display = document.getElementById('display');
  let value = parseFloat(display.value);
  if (isNaN(value)) {
    alert('Masukkan angka terlebih dahulu');
    return;
  }
  let radians = value * Math.PI / 180;
  let result;
  switch (func) {
    case 'sin':
      result = Math.sin(radians);
      break;
    case 'cos':
      result = Math.cos(radians);
      break;
    case 'tan':
      result = Math.tan(radians);
      break;
  }
  display.value = result;
}
