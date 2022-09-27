const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const fs = require("fs")
const inquirer = require("inquirer")

const teamMembers=[]

function menu(){
    function createManager(){
        inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the name of the manager?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the manager's ID?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the manager's email?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the manager's office number?"
            },
        ])
        .then((answers)=>{
            const manager=new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            teamMembers.push(manager)
        })
    }
    function createTeam(){
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "employeeRole",
                    choices: ["Engineer", "Intern", "Finished adding team members"]
                }
              
            ])
    }

}