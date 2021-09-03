const axios = require('axios'); // promised based HTTP client for browser and nodejs

const api = {
    async getUser(responses){
        try {
            let response = await axios
            
            .get(`https://api.github.com/users/${responses.username}`); 
            return response.data; 
        }
        catch(err){
            console.log(err); 
        }
    }
}; 

module.exports = api; 