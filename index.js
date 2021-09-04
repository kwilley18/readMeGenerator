const inquirer = require('inquirer'); // error feedback, questions, validating answers
const fs = require('fs'); // file server
const util = require('util'); // debugging purposees

const generateMarkdown= require('./utils/generateMarkdown.js'); 
const api = require('./utils/api.js'); 

const fileQuestions = [

    // github user info 
    {
        type: 'input',
        message: "What is your github user name?",
        name: 'username', 
        default: 'kwilley18',
        validate: userInfo => {
            if(userInfo.length < 1) {
                console.log("username not valid"); 
            }
            return true; 
        }
    },

    // email address
    {
        type: 'input', 
        message: "Please enter email address",
        name: 'email', 
        validate: emailAddress => {
           //for(var i = 0; i < emailAddress.length; i++){
                if( emailAddress){
                    return true;  
                }
                else{
                    return false; 
                }
           // }
        }
    },

    // name of project 
    {
        type: 'input', 
        name: 'title', 
        message: "Enter the name of the project",
        validate: projectName => {
            if(projectName){
                return true;
            }
            else{
                console.log("Project name must not be blank"); 
                return false; 
            }
        }
    },

    // github repo 
    {
        type: 'input', 
        name: 'repo', 
        message: "What is the name of your github repo?",
        default: 'README GENERATOR', 
        validate: answer => {
            if(answer.length < 1){
                return console.log("Not a valid github repo name"); 
            }
            return true; 
        }
    },

    // file description 
    {
        type: 'input',
        name: 'description', 
        message: "Enter the project description",
        validate: projectDescription => {
            if(projectDescription){
                return true; 
             }
             else{
                 console.log("Description must not be blank"); 
                 return false; 
             }
         }
    },

    // installation instructions 
    {
        type: 'input',
        name: 'installation', 
        message: "Enter the installation instructions",
        validate: installInfo => {
            if(installInfo){
                return true; 
            }
            else{
                console.log("Installation must not be blank"); 
                return false; 
            }
        }
    },

    // usage info
    {
        type: 'input',
        name: 'usage', 
        message: "Enter usage info",
        validate: usageInfo => {
            if(usageInfo){
                return true; 
            }
            else{
                console.log("Usage info must not be blank"); 
                return false; 
             }
         }
    },

    // contribution guidelines
    {
        type: 'input',
        name: 'contribution', 
        message: "Please enter contribution guidelines",
        validate:   contributionInfo => {
            if(contributionInfo){
                return true; 
            }
            else{
                return false; 
            }
        }
    },    
    
    // test instructions 
    {
        type: 'input',
        name: 'tests', 
        message: "Please enter test instructions" ,
        validate:  testInfo => {
            if(testInfo){
                return true; 
            }
            else{
                console.log("Please enter test instructions"); 
                return false; 
            }
        }
},
    // licensing 
    {
        type: 'list',
        name: 'license', 
        message: "Please enter licensing info" ,
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        validate:  licenseInfo => {
            if(licenseInfo){
                return true; 
            }
            else{
                console.log("Please choose a license"); 
                return false; 
            }
        }
},


];


function writeToFs(fileName, info){
    fs.writeFile(fileName, info, error => {
        if(error) {
            return console.log(error); 
        }
         console.log("sent to file"); 
    }        
  )
}



const writeToFile = util.promisify(writeToFs); 

async function init(){
    try{
        const responses = await inquirer.prompt(fileQuestions); 
        console.log(responses); 

        const loginInfo = await api.getUser(responses); 

        const markdown = generateMarkdown(responses, loginInfo); 
        await writeToFile('exampleREADME.md', markdown); 
    }
    catch(err){
        console.log(err); 
    }
    
}; 

init(); 
