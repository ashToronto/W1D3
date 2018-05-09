var countLetters = function(input){
  var letters = input.split(' ').join('');

  var result = {}
  for (var j = 0; j < letters.length; j ++){

    if (result[letters[j]]) {
      result[letters[j]].push(j);
    }
    else {
      result[letters[j]] = [j];
    }
  }
  console.log(result)
}

countLetters('lighthouse in the house')