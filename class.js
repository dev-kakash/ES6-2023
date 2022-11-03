class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log(`${this.name} is walking!!`);
  }
}

const akash = new Person("akash");
akash.walk();

class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log(`${this.name} is teaching ${this.degree}!!`);
  }
}

const aminul = new Teacher("Aminul", "Algorithm");
aminul.walk();
aminul.teach();
