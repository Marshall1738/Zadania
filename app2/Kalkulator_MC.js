class Kalkulator {
    constructor() {
      this.history = [];
    }
  
    dodawanie = (...numbers) => {
      const result = numbers.reduce((sum, num) => sum + num, 0);
      this.history.push(`dodawanie: ${numbers.join(" + ")} = ${result}`);
      return result;
    }
  
    odejmowanie = (a, b) => {
      const result = a - b;
      this.history.push(`odejmowanie: ${a} - ${b} = ${result}`);
      return result;
    }
  
    mnozenie = (...numbers) => {
      const result = numbers.reduce((prod, num) => prod * num, 1);
      this.history.push(`mnożenie: ${numbers.join(" * ")} = ${result}`);
      return result;
    }
  
    dzielenie = (a, b) => {
      if (b === 0) return 'Nie można dzielić przez zero';
      const result = a / b;
      this.history.push(`dzielenie: ${a} / ${b} = ${result}`);
      return result;
    }
  
    wyswietlanieHistorii = () => this.history;
  
    czyszczenieHistorii = () => this.history = [];
  }
  
  const kalkulator = new Kalkulator();
  console.log(kalkulator.dodawanie(18, 2));
  console.log(kalkulator.odejmowanie(32, 8));
  console.log(kalkulator.mnozenie(5, 9, 2));
  console.log(kalkulator.dzielenie(88, 4));
  console.log(kalkulator.wyswietlanieHistorii());