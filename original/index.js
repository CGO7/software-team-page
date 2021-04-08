// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input
const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your team manager name?',
            name: 'managerName',
        },
        {
            type: 'input',
            message: 'What is his/her employee ID?',
            name: 'managerId',
        },
        {
            type: 'input',
            message: 'what is his/her email address?',
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: 'what is his/her office number?',
            name: 'managerOffice',
        },
        {
            type: 'list',
            message: 'Add Engineer or Intern',
            name: 'employeeType',
            choices: ['engineer', 'intern', 'No one to add'],
        },

    ])
       // .then((answers) => {
    //     if (answers.employeeType === 'engineer') {     
    //         empQuestions();
    //     } if (answers.employeeType === 'intern') {
    //         empQuestions2();
    //     } else {
    //         (answers.employeeType === 'No one to add')
    //         //exit function
    //     }
    // });

    
};

var managerList = document.createElement("li");
var managerN = document.createTextNode($(managerName));
managerList.appendChild(managerN);
document.getElementById("myList").appendChild(managerList);

const empQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is employees name?',
            name: 'emp-name',
        },
        {
            type: 'input',
            message: 'What is his/her employee ID?',
            name: 'emp-id',
        },
        {
            type: 'input',
            message: 'What is his/her email address?',
            name: 'emp-address',
        },
        {
            type: 'input',
            message: "What is his/her GitHub username?",
            name: 'emp-github',
        },
    ]);
};

const empQuestions2 = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is employees name?',
            name: 'emp-name',
        },
        {
            type: 'input',
            message: 'What is his/her employee ID?',
            name: 'emp-id',
        },
        {
            type: 'input',
            message: 'What is his/her email address?',
            name: 'emp-address',
        },
        {
            type: 'input',
            message: 'What school did he/she attend?',
            name: 'emp-school',
        },
    ]);
};



const writeFileSync = util.promisify(fs.writeFile);


//need help with switch statement or maybe if and then statement???
//const answers = answers;

const generateManager = (answers) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Emp Info</title>
</head>
<body>
    <section class="hero is-small">
        <div class="hero-body">
            <div class="container">
                <h1 class="title" id="title">
                    Employee Profile Generator
                </h1>
            </div>
        </div>
    </section>
    <div class="row align-items-center">
        <div class="card">
            <div class="card-header">${answers.managerName}</div><br>
            <h5 id="jobType">Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${answers.managerId}</li>
                <li class="list-group-item">${answers.managerEmail}</li>
                <li class="list-group-item">${answers.managerOffice}</li>
            </ul>
        </div>
    </div>
</body>
</html>`

const init = () => {
    managerQuestions()
        .then((answers) => writeFileSync("index.html", generateManager(answers)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.log(err));
}

init();

// TODO: Create a function to write README file
//const writeFileSync = util.promisify(fs.writeFile);