import readlineSync from 'readline-sync';

const hello = () => {
  const name = readlineSync.question('May I have your name?');
  const hi = 'Hello,';
  const space = ' ';
  console.log(hi + space + name);
};

export default hello;
