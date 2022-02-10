#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomFloat = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  console.log('');
  const num4 = 1; // результат
  let n = 1; // раунды

  while (n <= 3) {
    const num = Math.floor(Math.random() * 30);
    let ans = '';

    const prime = (num) => {
      let i = 2;
      if (num === 2) {
        ans = 'yes';
        i += num;
      } else if (num === 0 || num === 1) {
        ans = 'no';
        i += num;
      } else if (num > 2) {
        while (i < num) {
          if (num % i !== 0) {
            ans = 'yes';
            i += 1;
          } else {
            ans = 'no';
            i += num;
          }
        }
      }
    };

    prime(num);

    const quest = () => {
      console.log(`Question: ${num}`);
    };

    quest();

    const answer = readlineSync.question('Your answer: ');

    if (answer == ans && n <= 3) {
      console.log('Correct!');
      n += 1;
    } else if (answer !== ans) {
      n += 4;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${ans}' . Let's try again, ${name}!`);
    }
  }

  if (n === 4) {
    console.log(`Congratulations, ${name}!`);
  }
};

console.log('\nWelcome to the Brain Games!');
console.log('What number is missing in the progression?');
console.log('');
getRandomFloat();

export default getRandomFloat;
