const items = {
  name: "akash",
  page: "100",
  price: "20USD",
};
// Normal
// items.name = "akash";
// items.page = "100";

//Destructuring
const { name, page, price } = items;

console.log(name, page, price);
