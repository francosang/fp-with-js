// Functional Programming for Beginners Excercise

// create the code to go from studentGrades array, 
// to studentFeedback (as shown in comments below)

const studentGrades = [
  { name: 'Joe', grade: 88 },
  { name: 'Jen', grade: 94 },
  { name: 'Steph', grade: 77 },
  { name: 'Allen', grade: 60 },
  { name: 'Gina', grade: 54 },
];

const gradeRules = [
  {
    message: "Excellent Job",
    requiredGrade: 90,
    letter: 'a',
  },
  {
    message: "Nice Job",
    requiredGrade: 80,
    letter: 'b',
  },
  {
    message: "Well done",
    requiredGrade: 70,
    letter: 'c',
  },
  {
    message: "What happened",
    requiredGrade: 60,
    letter: 'd',
  },
  {
    message: "Not good",
    requiredGrade: 0,
    letter: 'f',
  }
];

function approveRule(studentGrade) {
  return function (gradeRule) {
    return studentGrade >= gradeRule.requiredGrade;
  };
}

function getStudentFeedback(gradeRules) {
  return function (studentGrade) {
    const rule = gradeRules.find(approveRule(studentGrade.grade));
    return message(rule.message, studentGrade.name, rule.letter);
  };
}

function message(message, name, letter) {
  return `${message} ${name}, you got an ${letter}`;
}

const studentFeedback = studentGrades.map(getStudentFeedback(gradeRules));

const expectation = [
  'Nice Job Joe, you got an b',
  'Excellent Job Jen, you got an a',
  'Well done Steph, you got an c',
  'What happened Allen, you got an d',
  'Not good Gina, you got an f',
];

console.log(JSON.stringify(studentFeedback) === JSON.stringify(expectation));


// Solution found at:
// https://jsbin.com/vaqomiy/1/edit?js,console