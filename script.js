
function validate() {
    var age = document.getElementById("age").value;

    var salary = document.getElementById("salary").value;
   

    if (age < 18) {
       // alert("too Young!!")
        document.getElementById("result").innerHTML="too Young!!";
        return false;
    }

    if (age > 55) {
        alert("too Late!!")
        document.getElementById("result").innerHTML="too Late!!";
        return false;
    }


    if (salary < 0) salary = 0;
    if (salary > 10000) salary = 10000;


    var factor = 0;
    Male = document.getElementById("gender").checked;
    if (Male) {
        if (age >= 18 && age < 30)
            factor = 75 * salary
        else if (age >= 31 && age < 40)
            factor = 55 * salary
        else
            factor = 30 * salary;
    }
    else {
        if (age >= 18 && age < 30) //
            factor = 75 * salary
        else if (age >= 31 && age < 40)
            factor = 50 * salary
        else
            factor = 35 * salary;

    }
    
    document.getElementById("result").innerHTML="Motage is: " + factor;
    return true;


}
