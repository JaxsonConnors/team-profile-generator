const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const template = require("./src/template");

const writeFileAsync = util.promisify(fs.writeFile);

let teamArray = [];
let teamString = ``;

async function app() {
  try {
      await promptUser()

      for(let i = 0; i < teamArray.length; i++) {
          teamString = teamString + template.generateEmpCard(teamArray[i]);
      }

      writeFileAsync("./dist/index.html", template.generateHTML(teamString));

      console.log("index.html file created successfully");

  } catch (err) {
      return console.log(err);
  }
}

async function promptUser() {
  let responseDone = "";

    do {
      try {
        let response = await inquirer.prompt([
          {
            type: "input",
            name: "name",
            message: "What is the employee's name?: ",
            validate: function validateName(name){
              return name !== '';
            }
          },
          {
            type: "input",
            name: "id",
            message: "What is the employee's ID: ",
            validate: function validateName(name){
              return name !== '';
            }
          },
          {
            type: "input",
            name: "email",
            message: "What is the employee's email address: ",
            validate: function validateEmail(name){
              return name !== '';
            }
          },
          {
            type: "list",
            name: "role",
            message: "What what is the employee's role:",
            choices: [
              "Engineer",
              "Intern",
              "Manager"
            ]
          }
        ]);
          let response2 = ""

          if (response.role === "Engineer") {
            response2 = await inquirer.prompt([{
              type: "input",
              name: "x",
              message: "What is the employee's github username?:",
                validate: function validateName(name){
                  return name !== '';
                },
              }, 
            ]);
            const engineer = new Engineer(response.name, response.id, response.email, response2.x);
            teamArray.push(engineer);

          } else if (response.role === "Intern") {
            response2 = await inquirer.prompt([{
              type: "input",
              name: "x",
              message: "What school is the employee attending?:",
                validate: function validateName(name){
                  return name !== '';
                },
              }, 
            ]);
            const intern = new Intern(response.name, response.id, response.email, response2.x);
            teamArray.push(intern);

           } else if (response.role === "Manager") {
                response2 = await inquirer.prompt([{
                  type: "input",
                  name: "x",
                  message: "What is the employee's office number?:",
                  validate: function validateName(name){
                    return name !== '';
                  },
                }, 
              ]);
            const manager = new Manager(response.name, response.id, response.email, response2.x);
            teamArray.push(manager);
          }

      } catch (err) {
        return console.log(err);
      }
        responseDone = await inquirer.prompt([{
          type: "list",
          name: "finish",
          message: "Do you want to continue?: ",
          choices: [
              "Yes",
              "No"
            ]
          },
        ]);

   } while (responseDone.finish === "Yes");
   
}
 
app();