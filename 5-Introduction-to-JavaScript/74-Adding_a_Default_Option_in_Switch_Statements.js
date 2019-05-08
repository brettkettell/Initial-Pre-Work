// I learned how to add a  default option in a switch statement

function switchOfStuff(val) {
  var answer = "";

  switch(val){
    case 'a': answer = 'apple';
    break;
    case 'b': answer = 'bird';
    break;
    case 'c': answer = 'cat';
    break;
    default: answer = 'stuff';
  }

  return answer;
}
