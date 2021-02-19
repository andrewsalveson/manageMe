const readline = require('readline');
const version = '1.0.1';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const ANS = {
  Y:1,
  N:2,
  Mu:3,
}
function ask(q,func){
  return rl.question(`${q}? [Y/n]: `,func);
}
function ans(answer){
  answer = answer.toLowerCase();
  switch(answer){
    case '':
    case 'y':
    case 'yes':
    case 'yeah':
      return ANS.Y;
      break;
    case 'n':
    case 'no':
    case 'nah':
      return ANS.N;
      break;
  }
  return ANS.Mu;
}
function say(t){
  console.log(t);
}
function what(t){
  return say(`I don't understand "${t}"`);
}
function good(){
  say(`good, everything is as it should be`);
  return process.exit(1);
}
function check(){
  ask('has Andrew complained lately',
  function(a){
    switch(ans(a)){
      case ANS.Y:
        return eat();
        break;
      case ANS.N:
        return good();
      default:
        what(a);
        return check();
        break;
    }
  });
}
function eat(){
  ask('has he eaten lately',
  function(a){
    switch(ans(a)){
      case ANS.Y:
        working();
        break;
      case ANS.N:
        food();
        break;
      default:
        what(a);
        return eat();
        break;
    }
  });
}
function working(){
  ask('have you given him something to work on',
  function(a){
    switch(ans(a)){
      case ANS.Y:
        return lonely();
        break;
      case ANS.N:
        return work();
        break;
      default:
        what(a);
        return eat();
        break;
    }
  });
}
function lonely(){
  ask('is he lonely',
  function(a){
    switch(ans(a)){
      case ANS.Y:
        say('tell him a joke or something');
        return exit();
      case ANS.N:
        return ass();
        return 
      default:
        what(a);
        return eat();
        break;
    }
  });
}
function ass(){
  say(`tell him to stop being an ass`);
  return exit();
}
function work(){
  say('give him something to work on then, that will shut him up');
  return exit();
}
function food(){
  say(`he needs to eat then he'll calm down`);
  return exit();
}
function start(){
  say(`Andrew management v. ${version}`);
  check();
}
function exit(e){
  return process.exit(e);
}
start();
