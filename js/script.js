//creat variable using 'var' keyword
 var a=10;
 var b=20;

 console.log(a+b);

 var c=20;
 {
    console.log(c); // Block scope
 }

 {
    var d=50;
 }
 console.log(d)

 {
    var a=100;
    console.log(a)
 }

 var a=110;
 {
    var a=130;
    {
        var a=150;
        {
            var a=160;
        } 
    }
 }
 console.log(a);