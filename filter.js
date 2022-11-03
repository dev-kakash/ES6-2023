const obj = [
  { id: 1, name: "Akash", isActive: false },
  { id: 2, name: "Batash", isActive: true },
  { id: 3, name: "Pakhi", isActive: false },
];

// const result = obj.filter(function (job) {
//   return job.isActive;
// });

const result = obj.filter((job) => job.isActive);

console.log(result);
