function generateMarkdown(userResponses, userInfo) {

  //let readMeTitle = '## Table of Contents'; 
  let readMeInfo = `#${userResponses.title}`; 

  if(userResponses.description !==''){
    // readMeTitle+= '##Installation'; 
 
     readMeInfo+= 
     
    `
       
    ## Description 
       
    ${userResponses.description}`; 
   }

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
       
    ## Questions 

    If you have any questions please contact me with the info below
    https://github.com/${userResponses.username}`; 
   }

  
   return readMeInfo;  
    
  }
  
  module.exports = generateMarkdown;