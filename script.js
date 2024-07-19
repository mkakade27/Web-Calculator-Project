let input = document.getElementById('inputBox'); //perform various operations on input Element.
let buttons =document.querySelectorAll('button'); /* it select all button elements in the document and return Nodelist.
can perform various operations on this NodeList.*/
let string=""; // can use null string variable for store and manipulate data.
let arr=Array.from(buttons);//it convert NodeList into Array.

arr.forEach(button => { 
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML =='=')   //if-else  stetement
            {
                string=eval(string);
                input.value = string;
            }
        else if (e.target.innerHTML == 'AC')
            {
                string="";
                input.value = string;
            }
        else if (e.target.innerHTML =='DEL')
            {
             string = string.substring(0, string.length-1);
             input.value = string;  
            }
        else
           {
            string += e.target.innerHTML;
            input.value = string;
           }    
    })
})