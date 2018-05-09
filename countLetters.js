var countLetters = function(input){

  var letters = input.split(' ').join('').split('');
  var duplicates = letters.slice().sort()

// ********* SORTS OUT LETTERS ADJUSTING FOR DUPLICATES ************
var sort = []
for (var i = 0; i < duplicates.length; i ++){
    sort.push(duplicates[i])
}


// ****************** MAKES THE LIST OF LETTERS ********************
var letterList = []
// for (var j = 0; j <= sort.length; j ++){
//   if (sort[j] !== sort[j+1])
//   {
//     letterList.push(sort[j])
//   }
// }

// ****************** COUNTING DUPLICATE LETTERS ********************


// var numberOfLetters = []
// for (var b = 0; b < letterList.length; b ++){
//   var count = 0

//   for (var c = 0; c < sort.length; c ++){

//     if (sort[c] === letterList[b]){
//       count += 1;
//     }
//     else if (sort[c] !== sort[c+1]){
//       numberOfLetters.push(count)
//     }
//   }
// }

var letterList = {}
for (var j = 0; j < sort.length; j ++){
  // if (sort[j] !== sort[j+1])
  // {
    if (letterList[sort[j]]) {
      letterList[sort[j]] += 1;
    }
    else {
      letterList[sort[j]] = 1;
    }
  //}
}




console.log(sort)
console.log(letterList)

}

countLetters('lighthouse in the house')



