class Question {
  constructor(answer, weight) {
    this.answer = answer;
    this.weight = weight;
  }
}

class Exams {
  constructor() {
    this.weight = [];
    this.answer = [];
    this.exams = [];
  }

  add(exam) {
    this.exams.push(exam);
    this.weight.push(exam.weight);
    this.answer.push(exam.answer);
  }

  avg() {
    if (this.exams.length === 0) return 0;
    
    let totalScore = 0;
    let totalWeight = 0;
    
    for (let i = 0; i < this.exams.length; i++) {
      totalScore += this.exams[i].weight;
      totalWeight += this.exams[i].weight;
    }
    
    return totalScore / this.exams.length;
  }

  min(count) {
    if (this.weight.length === 0) return [];
    
    let sortedWeights = [...this.weight].sort((a, b) => a - b);
    
    return sortedWeights.slice(0, count);
  }

  max(count) {
    if (this.weight.length === 0) return [];
    
    let sortedWeights = [...this.weight].sort((a, b) => b - a);
    
    return sortedWeights.slice(0, count);
  }

  calculateScore(studentAnswers) {
    let totalPoints = 0;
    let totalPossiblePoints = 0;
    
    for (let i = 0; i < this.exams.length; i++) {
      totalPossiblePoints += this.exams[i].weight;
      
      if (studentAnswers[i] === this.exams[i].answer) {
        totalPoints += this.exams[i].weight;
      }
    }
    
    return (totalPoints / totalPossiblePoints) * 10;
  }
}

const prova = new Exams();

prova.add(new Question('a', 2));
prova.add(new Question('b', 2));
prova.add(new Question('a', 2));
prova.add(new Question('c', 2));
prova.add(new Question('d', 2));

const respostasAluno = ['a', 'b', 'b', 'b', 'b'];

const nota = prova.calculateScore(respostasAluno);
console.log(`Nota do aluno: ${nota.toFixed(1)}`);