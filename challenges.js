'use strict';

// Challenge #1
/*
const pollBtn = document.querySelector('.poll');

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question} \n${this.options.join('\n')}\n Write option number:`
      )
    );

    if (answer && answer >= 0 && answer < this.answers.length)
      this.answers[answer]++;
    else alert('Number not valid');
    // console.log(this.answers);
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    const typeClean = type.toLowerCase();
    if (typeClean === 'array') console.log(this.answers);
    if (typeClean === 'string')
      console.log(`Poll results are ${this.answers.join(', ')}`);
  },
};

pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));

// displayResults('ArrAy');
const test1 = [5, 2, 3];
const test2 = [1, 5, 3, 9, 6, 1];

poll.displayResults.call({ answers: test1 });
poll.displayResults.call({ answers: test2 }, 'string');
*/

// Challenge #2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document
    .querySelector('body')
    .addEventListener('click', () => (header.style.color = 'blue'));
})();
