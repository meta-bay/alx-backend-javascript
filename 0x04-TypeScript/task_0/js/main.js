var student1 = {
    firstName: 'Kenansa',
    lastName: 'Meseret',
    age: 21,
    location: 'Inda'
};
var student2 = {
    firstName: 'Jons',
    lastName: 'Carlos',
    age: 20,
    location: 'Zambia'
};
var studentsList = [student1, student2];
var table = [];
studentsList.forEach(function (student) {
    table.push([student.firstName, student.location]);
});
console.log(table);
