//definisi kelas kalkulator
class Calculator {
  constructor() {
      this.expression = '';
  }

  clean() {
      this.expression = '';
      this.updateDisplay();
  }

  back() {
      this.expression = this.expression.slice(0, -1);
      this.updateDisplay();
  }

  insert(value) {
      this.expression += value;
      this.updateDisplay();
  }

  percentage() {
      try {
          const result = eval(this.expression + "/100");
          this.expression = result.toString();
          this.updateDisplay();
      } catch (error) {
          this.expression = 'Error';
          this.updateDisplay();
      }
  }

  equal() {
      try {
          const result = eval(this.expression);
          this.expression = result.toString();
          this.updateDisplay();
      } catch (error) {
          this.expression = 'Error';
          this.updateDisplay();
      }
  }

  updateDisplay() {
      document.form.textarea.value = this.expression;
  }
}

const calculator = new Calculator();

function clean() {
  calculator.clean();
}

function back() {
  calculator.back();
}

function insert(value) {
  calculator.insert(value);
}

function equal() {
  calculator.equal();
}

function percentage() {
  calculator.percentage();
}
// dipanggil saat tombol