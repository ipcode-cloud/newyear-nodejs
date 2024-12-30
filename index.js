
import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    'Happy New Year Everybody!! \n'
  );

  await sleep();
  rainbowTitle.stop();

  console.log(`
    ${chalk.bgBlue('New Year Plans')} 
    Learn new things.
    Collaborate with others.
    Fix ${chalk.bgRed('Bugs')} on Every codebase i touch.
    Share Knowledge & skills.
    Be Happy...

  `);
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner('Checking answer...').start();
  await sleep();

  if (isCorrect) {
    spinner.success({ text: `Good Job ${playerName}. That's right!` });
  } else {
    spinner.error({ text: `🤖🤖🤖, please ${playerName} update your Mind!` });
    process.exit(1);
  }
}

async function askName() {
  const answers = await inquirer.prompt({
    name: 'player_name',
    type: 'input',
    message: 'Enter your Dev name?',
    default() {
      return 'Player';
    },
  });

  playerName = answers.player_name;
}

function winner() {
  console.clear();
  figlet(`Happy New Year! !, ${playerName} !\n 2,025`, (err, data) => {
    console.log(gradient.pastel.multiline(data) + '\n');

    console.log(
      chalk.green(
        `Start New Year like Pro, ${new Date().getFullYear()}! 🚀🚀🚀\n`
      )
    );
    process.exit(0);
  });
}

async function question0() {
  const answers = await inquirer.prompt({
    name: 'question_0',
    type: 'list',
    message: 'Which New year are gonna Start?\n',
    choices: [
      '2000',
      '2090',
      '2400',
      '2025',
    ],
  });

  return handleAnswer(answers.question_0 === '2025');
}


// Run it with top-level await
console.clear();
await welcome();
await askName();
await question0();
winner();