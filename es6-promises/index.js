const takeAChance = require('./take-a-chance');

const quinn = takeAChance('Quinn');

quinn.then(val => console.log('Hooray! You\'re so lucky, Quinn!'));
quinn.catch(error => console.log(error.message));
