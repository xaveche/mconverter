//Centimeters to Inches
    CtoI.onclick = function () {
     var user = document.getElementById("input").value;
     var num = user / 2.54;
     var round = num.toFixed(2);
    CI.innerHTML = "Inches: " + round; 
    CI.style.color="red";
    
};


//Inches to Centimeters
    ItoC.onclick = function () {
     var user = document.getElementById("input").value;
     var num = user * 2.54;
     var round = num.toFixed(2);
     IC.innerHTML = "Centimeters: " + round;
     IC.style.color="blue";
    
};
//Centimeter to Meters
    CtoM.onclick = function () {
     var user = document.getElementById("input").value;
     var num = user / 100;
     var round = num.toFixed(2);
     CM.innerHTML = "Meters: " + round;
     CM.style.color="green";
};

//Meters to Centimeters
    MtoC.onclick = function () {
    var user = document.getElementById("input").value;
    var num = user * 100;
    var round = num.toFixed(2);
    MC.innerHTML = "Centimeters: " + round;
    MC.style.color="orange";
};

//Inches to Meters
    ItoM.onclick = function () {
    var user = document.getElementById("input").value;
    num = user / 39.37;
    var round = num.toFixed(2);
    IM.innerHTML = "Meters: " + round;
    IM.style.color="pink";
};

//Meters to Inches
    MtoI.onclick = function () {
    var user = document.getElementById("input").value;
    var num = user * 39.37;
    var round = num.toFixed(2);
    MI.innerHTML = "Inches: " + round;
    MI.style.color="black";
    
};

//Meters to Feet
    MtoF.onclick = function () {
    var user = document.getElementById("input").value;
    var num = user * 3.281;
    var round = num.toFixed(2);
    MF.innerHTML = "Feet: " + round;
    MF.style.color="grey";
};

//Feet to Meters
    FtoM.onclick = function () {
    var user = document.getElementById("input").value;
    var num = user / 3.281;
    var round = num.toFixed(2);
    FM.innerHTML = "Meters: " + round;
    FM.style.color="gold";   
   
};