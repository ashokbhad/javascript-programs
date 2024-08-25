const jsonString = `
{
    "id": 11,
    "fullName": "Elon Musk",
    "isMarried": true,
    "city": null
}`;

const employee = JSON.parse(jsonString);
console.log(employee);
console.log(employee.isMarried);
console.log(employee.city);

console.log(`======= Object to JSON Conversion===========`);
const address = {
  flatNumber: "B2",
  society: "Horizon",
  street: "Pune",
  state: "MH",
};
const addressJson = JSON.stringify(address);
console.log(typeof addressJson);

console.log(addressJson);
