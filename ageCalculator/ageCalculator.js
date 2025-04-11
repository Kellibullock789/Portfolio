function ageCalc(birthYear,futureYear){
    var age1=futureYear-birthYear;
    var age2=age1-1;
document.write('I will be either '+age2+' or '+age1+' in '+futureYear);
}

var birthYear=1993;
var futureYear=2025;

ageCalc(birthYear,futureYear);

document.write('<br><br><br><br>')