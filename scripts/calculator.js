// ask and calculate

function askAndCalc() {
    let output = document.getElementById("output");
    let sum = 0;
    let numbers = new Array();
    while (true) {
        var text = prompt("Give number");
        var number = parseInt(text);
        if (isNaN(number)) {
            break;            
        }   
        numbers.push(number);
        sum += number;
    }
    let fulltext = "<table border='1'>";
    numbers.forEach((element) => {
            fulltext += "<tr><td>" + element + "</td></tr>";
        }
    );
    fulltext += "</table>"
    output.innerHTML = "Annetetut luvut: " + fulltext + "Luku on: " + sum;
}