const axios = require('axios');
const functions = {
    add:(num1,num2) => num1 + num2,
    isNull: () => null,
    multiply: (number1,number2) => number1 * number2,
    checkValues:(x) => x,
    fetchUser: () =>
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.data)
      .catch(err => 'error')
};
    
    
    

    
module.exports = functions;