function rapo( val) 
{
let mate = document.getElementById("input");
 
    console.log(val);
  if(val === "=")
  {
     mate.value = eval(mate.value);

  }
  else if(val === "c")
   {
     mate.value = ""
   }
   else if (val === "$")
   {
     mate.value = mate.value.slice(0,-1)
   }
  //  else if(val==="S") 
  //  { 
  //      val='*'; 
  //      speak("multiplied") 
  //      mate.value += val;
  //      mate.value = val;
  //  } 
   else if ( val === "S")
   {
      const textInput = document.getElementById('input');
      const speakButton = document.getElementById('speak-button');

      speakButton.addEventListener('click', function fam() {
      const text = textInput.value;


       
   

       // Create a new SpeechSynthesisUtterance object
       const utterance = new SpeechSynthesisUtterance(text);
  
       // Speak the text
       speechSynthesis.speak(utterance );
         });
   }
      
  else {
     mate.value += val;
  }
}

// function speak(S) 
//     { 
//     let speech = new SpeechSynthesisUtterance(); 
//     speech.lang = "en-US"; 
     
//     speech.text = S; 
//     speech.volume = 1; 
//     speech.rate = 1; 
//     speech.pitch = 1; 
     
//     window.speechSynthesis.speak(speech);
//     }