function removeText(inputNames) {

    let originalText = inputNames;
 
     // remove Chime name from text
     originalText = originalText.replace(' meet@chime.aws <meet@chime.aws>;', '');
     originalText = originalText.replaceAll('; ', ';');
     
     /*
     // add ; to the end of the string if missing
     // necessary to have ; as the last character since we are counting and breaking the string at ;
     */
     // Input String 
     let str = originalText;
     // Getting last character using char at
     let lastCharacter = str.charAt(str.length - 1);
     if (lastCharacter != ";") {
         originalText = originalText + ";";
     }
     
     // break the text string into an array
     let sentences = originalText.split(/[;]/);
     
     // count the number of names in the set
     var numberNames = (originalText.split(";").length - 1) //3
     //console.log("number of names = " + numberNames)
    
     // Remove @amazon.com from text
     //let newText = originalText.replaceAll('@amazon.com', '');
 
     // count the number of names in the set
     var numberNames = (originalText.split(";").length - 1) //3
    // console.log("number of names = " + numberNames)
    
     //variable for all the names
     var allTheNames = "";
 
     // loop through each name
     for (let i=0; i < numberNames; i++)
     {
         // variable to hold boolean if Amazon employee
         var isAmazonEmployee;
 
         var firstWord;
         var secondWord;
         var thirdWord;
         var fullName;
 
         //console.log(i)
         //console.log(sentences[i]);
 
         let text = (sentences[i]);
 
         if (text.includes("chime.aws")) {
             // do nothing
         }
         else
         {
             const myArray = text.split(" ");
 
             // *********
             // Test for Amazon employee
             // *********
             // convert to lower case
             let testForAmazonEmp = text.toLowerCase();
             //console.log("converted to lower case " + testForAmazonEmp);
 
             // process Amazon employee names and email addresses
             if (testForAmazonEmp.includes("amazon")) {
                 firstWord = myArray[0];
                 secondWord = myArray[1];
                 thirdWord = myArray[2];
                 //console.log("F " + firstWord + " S " + secondWord + " T " + thirdWord);
                 let firstName = secondWord;
                 let lastName = firstWord;
                 //let emailAddress = thirdWord;
                 // get email address
                 let emailAddress = sentences[i].substring(sentences[i].indexOf("<")+1, sentences[i].indexOf(">"));
                 fullName = firstName + " " + lastName + " " + emailAddress;
 
                 // add their Phone Tool
                 //https://phonetool.amazon.com/users/jfescott
                 const myAliasArray = emailAddress.split("@");
                 let alias = myAliasArray[0];
                 // add their Slackme
                 //https://slack.com/app_redirect?channel=@sreeratn
 
 
                 fullName = fullName + "    <a href=https://phonetool.amazon.com/users/"+alias+" target=_blank> Phone Tool</a>    <a href=https://slack.com/app_redirect?channel=@"+alias+" target=_blank> Slack</a>";
 
             }
            // process non-Amazon employee names and email addresses
            else {
             firstWord = myArray[0];
             secondWord = myArray[1];
             thirdWord = myArray[2];
             //console.log("F " + firstWord + " S " + secondWord + " Third " + thirdWord);
             
             let firstName = secondWord;
             let lastName = firstWord;
             //let emailAddress = thirdWord;
             // get email address
             let emailAddress = sentences[i].substring(sentences[i].indexOf("<")+1, sentences[i].indexOf(">"));
             if (firstWord.includes(".")) {
                 // their name is in the second spot
                 let tmpFirstName = firstWord;
                 const myArray = tmpFirstName.split(".");
                 let firstName = myArray[0];
                 const firstNameCapitalized = firstName.charAt(0).toUpperCase() + firstName.slice(1);
                 lastName = sentences[i].substring(sentences[i].indexOf(".")+1, sentences[i].indexOf("@"));
                 const lastNameCapitalized = lastName.charAt(0).toUpperCase() + lastName.slice(1);
                 fullName = firstNameCapitalized + " " + lastNameCapitalized + ", " + emailAddress;
             }
             else {
                 fullName = firstName + " " + lastName + ", " + emailAddress;
             }
             
         }
 
         /*
                 if (i==0) {
                     //there is only a value in the first place
                     fullName = firstWord;
                     //fullName = thirdWord;
                 }
         */
                 // remove the ,
                 //fullName = fullName.replace(',', '');
                
                 console.log(fullName);
 
                 allTheNames = allTheNames + '<br>' + fullName;
         }
        
     }
 
     document.getElementById("emailnames").innerHTML = allTheNames;
 }
 
 function clearText()
 {
     document.getElementById("inputofthenames").value='';
 }