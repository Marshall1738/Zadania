class Student {
    constructor() {
        this.studenci = []
    }

    dodajStudenta = (imie, ...oceny) => {
        const srednia = this.obliczSrednia(oceny)
        this.studenci.push({ imie, oceny, srednia })
        return { imie, oceny, srednia }
    }

    znalezionyStudent = (minSrednia) => this.studenci.filter(student => student.srednia >= minSrednia)

    najlepszyStudent = () => this.studenci.reduce((najlepszy, current) => current.srednia > najlepszy.srednia ? current : najlepszy)

    obliczSrednia = (oceny) => oceny.reduce((suma, ocena) => suma + ocena, 0) / oceny.length

}

const sredniaOcen = new Student()
sredniaOcen.dodajStudenta("Michał", 1, 6, 2)
sredniaOcen.dodajStudenta("Marsel", 5, 3, 6)
console.log(sredniaOcen.najlepszyStudent())