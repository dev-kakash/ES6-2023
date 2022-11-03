var person = {
  name: "akash",
  age: 24,
  result: ["5.00", "5.00", "3.98"],

  // Normal Callback Function
  //   printResults: function () {
  //     var self = this;
  //     this.result.forEach(function (a) {
  //       console.log(`${self.name} result: ${a}`);
  //     });
  //   },

  //Arrow Function
  printResults: function () {
    this.result.forEach((a) => console.log(`${this.name} result: ${a}`));
  },
};

person.printResults();
