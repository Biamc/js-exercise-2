/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

O resultado final desse desafio deve ser algo em torno de:
*/

const students = [
  {
    name: 'Beatriz',
    firstTestGrade: 8.5,
    secondTestGrade:7.0
  },
  {
    name: 'Alex',
    firstTestGrade: 9,
    secondTestGrade:8
  },
  {
    name: 'Andressa',
    firstTestGrade: 6,
    secondTestGrade: 10
  },
  {
    name: 'Paulo',
    firstTestGrade: 9.5,
    secondTestGrade: 3.5
  },
  {
    name: 'Benício',
    firstTestGrade: 6.5,
    secondTestGrade: 5.5
  },
  {
    name: 'Brenda',
    firstTestGrade: 7.5,
    secondTestGrade: 3.0
  },
  {
    name: 'Guilherme',
    firstTestGrade: 9.5,
    secondTestGrade: 7.5
  }
]

function gradeAverage (firstGrade, secondGrade) {
  return (firstGrade + secondGrade) / 2
}



for(let student of students) {
if (gradeAverage(student.firstTestGrade, student.secondTestGrade) >= 7) {
  alert(`A média do estudante ${student.name} é ${gradeAverage(student.firstTestGrade, student.secondTestGrade)}. Parabéns ${student.name}! Você foi aprovado no concurso.`)
}else{
  alert(`A média do estudante ${student.name} é ${gradeAverage(student.firstTestGrade, student.secondTestGrade)}. Não foi dessa vez, ${student.name}! Tente novamente.`)
}
}

