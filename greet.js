
const c = require('chalk')
const f = require('figlet')

module.exports =function greet(name){
  console.log(f.textSync(name, {
    font: 'Delta Corps Priest 1',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));
    return(c.bgGreenBright("Hello, "+ name))
  }
