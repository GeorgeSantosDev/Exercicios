const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = (students ,grades) => {
   const studentsAverageGrades = students.map((student, i) => ({
    name: student,
    average: (grades.map((grade) => grade.reduce((acc, curr) => acc + curr, 0)/(grade.length)))[i]
   }))
   return studentsAverageGrades
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];
console.log(studentAverage(students, grades));



// reduce ((acc , curr) =>  , {})