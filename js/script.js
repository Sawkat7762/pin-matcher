     // Hide result
     var didnotmatch =  document.getElementById("didnotmatch").style.display ="none";
     var match = document.getElementById("match").style.display ="none"


     // Pin Generator call

     function PinGenerat(){
         function getPin() {
             const pin = Math.round(Math.random() * 10000);
              const pinString = pin + '';
              if (pinString.length == 4) {
                  return pin;
              }
              else {
      // console.log('got 3 digit and calling again', pin);
                  return getPin();
              }
         }
         const pinshow = getPin();
         document.getElementById("randomShow").value = pinshow;
         document.getElementById("display").value = "";
         document.getElementById("didnotmatch").style.display ="none";
          document.getElementById("match").style.display ="none"
         
     }

     
     
     function NumShow(Num){
         document.getElementById("display").value += Num;
     }
     function dltall(){
         document.getElementById("display").value = "";
     }
     function dltOne(){
         document.getElementById("display").value = display.value.slice(0, -1) ;
     }
     var clicks = 3;
     function submit(){
         const pinshow = document.getElementById("randomShow").value;
         const final =  document.getElementById("display").value;
         if(final==0){
             document.getElementById("didnotmatch").style.display ="block";
              document.getElementById("match").style.display ="none"
         }
         else if(final == pinshow ){
             document.getElementById("didnotmatch").style.display ="none";
              document.getElementById("match").style.display ="block";
              document.getElementById("action-left").style.display="none"

         }
         else{
             document.getElementById("didnotmatch").style.display ="block";
              document.getElementById("match").style.display ="none"
         }

         clicks -= 1;
         document.getElementById("clicks").innerHTML = clicks;

         if(clicks==0){
             document.getElementById("submit-btn").style.display ="none";
         }


     }