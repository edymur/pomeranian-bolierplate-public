import './styles.css';

export function JsPrototypes() {
  function Person(name) {
    //kontekst danej funkcji
    return (this.name = name);
  }

  //noa globalna metoda (zła praktyka)
  Person.prototypes.SayHello = function () {
    console.log(`Hello , I'm ${this.name}`);
  };

  const person1 = new Person('Maciej');
  const person2 = new Person('Dojlido');

  person1.SayHello();
  person2.SayHello();

  const num = 42;
  console.log(num.toString()); // Wywołanie metody na liczbieconst str = 'Hello, World!';console.log(str.length); // Dostęp do właściwości na ciągu znaków

  //array prototype

  Array.prototype.jestemNowaMetoda = function () {
    console.log('tak');
  };

  const myArray = [1, 2, 3];

  myArray.jestemNowaMetoda();

  //context this

  const person = {
    name: 'Maciej',
    sayHello: function () {
      return console.log(`Moje imie to ${this.name}`);
    },
  };

  person.sayHello(); //Moje imie to Maciej

  const user = {
    name: 'Ktos',
    sayHello: person.sayHello,
  };

  user.sayHello(); //Moje imie to Ktoś

  //bind function do wiazania kontekstu this/ zmiany kontekstu

  const bindSayHello = person.sayHello.bind(user);
  console.log('sddddddd');
  bindSayHello();
  console.log('sddddddd');

  //arrow function context
  const arrowFunctionWithThisContext = () => console.log(`Hello ${this.name}`);
  arrowFunctionWithThisContext();

  //OOP w JS (podejscie obiektowe)
  class UniquePerson {
    constructor(name, age = '65') {
      this.name = name;
      this.age = { ageInsideObject: age };
    }

    //co to - to metoda
    sayHello() {
      return console.log(`Hello, my class name is ${this.name}`);
    }

    //co to - to metoda
    getAge() {
      return console.log(`Hello, my class age is ${this.age.ageInsideObject}`);
    }
  }

  const getClassUniquePerson = new UniquePerson('Nie mam imienia', 50);
  getClassUniquePerson.sayHello(); // Hello, my class name is "Nie mam imienia"

  return <div classNaame="js-prototypes">hshss</div>;
}
