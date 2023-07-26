  //main script

      //removing section
      const remove1 = document.getElementById("remove-1");
      const remove2 = document.getElementById("remove-2");
 
      const parentNode = document.getElementById("parentNode");
      const cart1= document.getElementById("cart-1");
      const cart2= document.getElementById("cart-2");
 
      remove1.addEventListener("click",function(){
       cart1.style.display = "none";
       updating();
      })
 
      remove2.addEventListener("click",function(){
       cart2.style.display = "none";
       parentNode.removeChild(cart2);
       updating();
      })
      
 
 
       //with function 
          //for increasing
       increaser("increaser","number",1219,"phone-total");
       increaser("increaser-2","number-2", 59,"phone-total-2");
 
       function increaser(incr,numb,price,totalIndividual){
          const increaser = document.getElementById(incr);
       increaser.addEventListener("click", function(){
 
 
          
          const currentValue = parseInt(document.getElementById(numb).value) ;
          const updatedValue = currentValue + 1;
          document.getElementById(numb).value = updatedValue;
 
          const firstTotal = document.getElementById(totalIndividual).innerText;
          var firstTotalVal = parseFloat(firstTotal);
          firstTotalVal = firstTotalVal+ price; 
          document.getElementById(totalIndividual).innerText = firstTotalVal;
          updating();
       });
 
       }
 
       //for decreasing
       decreaser("decreaser","number",1219,"phone-total");
       decreaser("decreaser-2","number-2",59,"phone-total-2");
 
       function decreaser(decr,numb,price,totalIndividual){
       const decreaser = document.getElementById(decr);
       decreaser.addEventListener("click", function(){
          const currentValue = parseInt(document.getElementById(numb).value) ;
          const updatedValue = currentValue -1;
          const newValue = Math.max(updatedValue,0);
          document.getElementById(numb).value = newValue;
 
          const firstTotal = document.getElementById(totalIndividual).innerText;
          var firstTotalVal = parseFloat(firstTotal);
          firstTotalVal = firstTotalVal-price; 
          firstTotalVal = Math.max(firstTotalVal,0);
          document.getElementById(totalIndividual).innerText = firstTotalVal;
          updating();
       })}
 
 
       //updating subtotal
       function updating(){
          var subtotal = document.getElementById("subtotal");
          var subtotalValue = parseInt(subtotal);
          
          const phoneTot1 = document.getElementById("phone-total").innerText;
          const phoneTot1Value = parseFloat(phoneTot1);
       
          const phoneTot2 = document.getElementById("phone-total-2").innerText;
          const phoneTot2Value = parseFloat(phoneTot2);
        
          subtotalValue = phoneTot1Value + phoneTot2Value ;
          // var SubtotalInString = SubtotalInNumb.toString();
              subtotal.innerText = subtotalValue;
 
         const tax = document.getElementById("tax").innerText;
        var taxValue = parseInt(tax);
        //calculating 15% text
        taxValue = parseInt(subtotalValue * 0.15)
        document.getElementById("tax").innerText = taxValue ;
 
      
       var total = document.getElementById("total");
       var totalValue = parseInt(total);
 
       const subtot = document.getElementById("subtotal").innerText;
       subtotalValue = parseInt(subtot);
 
       const taxt = document.getElementById("tax").innerText;
       taxValue = parseInt(taxt);
 
 
          totalValue = subtotalValue + taxValue;
          total.innerText = totalValue;
          
       }
 