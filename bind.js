const person = {
  name: "akash",
  work() {
    console.log(this);
  },
};

person.work(); //will get the function this

const akash = person.work();

console.log(akash);
