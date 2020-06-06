var b1=document.getElementById("c"),
b2=document.getElementById("b2"),
b3=document.getElementById("b3"),
b4=document.getElementById("/"),

b5=document.getElementById("7"),
b6=document.getElementById("8"),
b7=document.getElementById("9"),
b8=document.getElementById("x"),

b9=document.getElementById("4"),
b10=document.getElementById("5"),
b11=document.getElementById("6"),
b12=document.getElementById("-"),

b13=document.getElementById("1"),
b14=document.getElementById("2"),
b15=document.getElementById("3"),
b16=document.getElementById("+"),

b17=document.getElementById("0"),
b18=document.getElementById("."),
b19=document.getElementById("="),


b20=document.getElementById("ac"),
b21=document.getElementById("dc");

textArea=document.getElementById("te");

b2.onclick=function(){
        textArea.textContent+=this.value;
}
b3.onclick=function(){
    textArea.textContent+=this.value;
}
b4.onclick=function(){
    textArea.textContent+=this.value;
}


b5.onclick=function(){
    textArea.textContent+=this.value;
}
b6.onclick=function(){
        textArea.textContent+=this.value;
}
b7.onclick=function(){
    textArea.textContent+=this.value;
}
b8.onclick=function(){
    textArea.textContent+=this.value;
}

b9.onclick=function(){
    textArea.textContent+=this.value;
}
b10.onclick=function(){
        textArea.textContent+=this.value;
}
b11.onclick=function(){
    textArea.textContent+=this.value;
}
b12.onclick=function(){
    textArea.textContent+=this.value;
}

b13.onclick=function(){
    textArea.textContent+=this.value;
}
b14.onclick=function(){
        textArea.textContent+=this.value;
}
b15.onclick=function(){
    textArea.textContent+=this.value;
}
b16.onclick=function(){
    textArea.textContent+=this.value;
}

b17.onclick=function(){
    textArea.textContent+=this.value;
}

b18.onclick=function(){
    textArea.textContent+=this.value;
}
b19.onclick=function(){
    textArea.textContent=eval(textArea.textContent);
}

b20.onclick=function(){
    textArea.textContent="";
}
b21.onclick=function(){
    var str=textArea.textContent;
    textArea.textContent=str.substring(0, str.length - 1);
}
dark=document.getElementById("DM");
con=document.getElementById("CONT");
dark.onclick=function() {
    'use strict';
     if(dark.classList.contains('Da'))
     {
         dark.textContent='Change To Normal Mode';
         dark.classList.toggle('Da');
         dark.classList.toggle('Wi');
     }
     else if(dark.classList.contains('Wi'))
     {
        dark.textContent='Change To Dark Mode';
        dark.classList.toggle('Da');
        dark.classList.toggle('Wi');
     }
     b1.classList.toggle('normal');
     b1.classList.toggle('darkN');

     b2.classList.toggle('normal');
     b2.classList.toggle('darkN');

     b3.classList.toggle('normal');
     b3.classList.toggle('darkN');

     b5.classList.toggle('normal');
     b5.classList.toggle('darkN');

     b6.classList.toggle('normal');
     b6.classList.toggle('darkN');

     b7.classList.toggle('normal');
     b7.classList.toggle('darkN');

     b9.classList.toggle('normal');
     b9.classList.toggle('darkN');

     b10.classList.toggle('normal');
     b10.classList.toggle('darkN');

     b11.classList.toggle('normal');
     b11.classList.toggle('darkN');

     b13.classList.toggle('normal');
     b13.classList.toggle('darkN');

     b14.classList.toggle('normal');
     b14.classList.toggle('darkN');

     b15.classList.toggle('normal');
     b15.classList.toggle('darkN');

     b17.classList.toggle('normal');
     b17.classList.toggle('darkN');

     b18.classList.toggle('normal');
     b18.classList.toggle('darkN');


     b21.classList.toggle('d');
     b21.classList.toggle('dDark');

     b20.classList.toggle('d');
     b20.classList.toggle('dDark');

     
     con.classList.toggle('conDark');
}