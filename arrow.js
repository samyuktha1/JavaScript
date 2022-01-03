function arrow(firstName,lastName)
 {
     var firstLetter=firstName[0];
     var secondLetter=lastName[0];
     var Arrow=(firstLetter+secondLetter);
     return Arrow;
 }
 console.log(arrow('Samyu','Nacham'))
 
 function arrowNew(firstName,lastName)
 {
     var firstLetter=firstName.charAt(0);
     var secondLetter=lastName.charAt(0);
     var Arrow=(firstLetter+secondLetter);
     return Arrow;
  }
  console.log(arrowNew('Zemoso','Labs'))
  
