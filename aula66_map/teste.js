const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kayleee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

const fullNameOfEachPerson = persons.map(valor => {
  return valor.firstname + " " + valor.lastname;
})

console.log(fullNameOfEachPerson);
