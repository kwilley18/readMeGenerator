function generateMarkdown(userResponses, userInfo) {


  // Creates a table of contents 
  let tableOfContents = `## Table of Contents`; 

  if(userResponses.installation !== ''){
    tableOfContents+= `
    * [Installation](#installation)`
  }; 

  if(userResponses.usage !== ''){
    tableOfContents+= ` 
    * [Usage](#usage)`
  };  
  
  if(userResponses.contribution !== ''){
    tableOfContents+= ` 
    * [Contribution](#contribution)`
  };   
  
  if(userResponses.tests!== ''){
    tableOfContents+= ` 
    * [Tests](#tests)`
  }; 

  if(userResponses.license!== ''){
    tableOfContents+= ` 
    * [License](#license)`
  }; 
  
  // Collects all of the user input 
  let readMeInfo = `
  # ${userResponses.title}
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io/).
  
  
  `; 



  if(userResponses.description !==''){
    // readMeTitle+= '##Installation'; 
 
     readMeInfo+= 
     
    `
       
    ## Description 
       
    ${userResponses.description}
    
    `; 
   }

   readMeInfo += tableOfContents;

  if(userResponses.installation !==''){
   // readMeTitle+= '##Installation'; 

    readMeInfo+= 
    
    `
      
    ## Installation
    
    **How to install the application and its components 
      
    ${userResponses.installation}`; 
    
  }
  if(userResponses.usage !==''){
    // readMeTitle+= '##Installation'; 
 
     readMeInfo+=  

     `
       
    ## Usage

    **Purposes for this application 
       
    ${userResponses.usage}`; 
   }

   if(userResponses.contribution !==''){
    // readMeTitle+= '##Installation'; 
 
     readMeInfo+= 
     
     `
       
    ## Contribution
       
    ${userResponses.contribution}`; 
   }

   if(userResponses.license !==''){
    // readMeTitle+= '##Installation'; 
 
     readMeInfo+= 
     
     `
       
    ## License
       
    ${userResponses.license}`; 
   }

   if(userResponses.username !==''){
    // readMeTitle+= '##Installation'; 
 
     readMeInfo+= 
     
     `
       
    ## Questions??? 

    If you have any questions please contact me with the info below

    Github: https://github.com/${userResponses.username}`; 
   }

   if(userResponses.email !== null){
     readMeInfo +=

     `
    Email: ${userResponses.email}
     `; 

   }

  
   return readMeInfo;  
    
  }
  
  module.exports = generateMarkdown;
