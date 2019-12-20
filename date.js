var d = new Date();
var hr = d.getHours()
var greeting = ""
var greetingSpan = document.getElementById("greeting")
/*
00 = 12 midnight	
01 = 1am
02 = 2am
03 = 3am
04 = 4am
05 = 5am
06 = 6am
07 = 7am
08 = 8am
09 = 9am
10 = 10am
11 = 11am
12 = 12pm
13 = 1pm
14 = 2pm
15 = 3pm
16 = 4pm
17 = 5pm
18 = 6pm
19 = 7pm
20 = 8pm
21 = 9pm
22 = 10pm
23 = 11pm
24 = 12am
*/
if (hr == 24 || hr < 12) {
    greeting = "morning"
}else if(hr > 11 && hr < 17){
    greeting = "afternoon"
}else{
    greeting = "evening"
} 

greetingSpan.innerHTML = greeting

console.log(hr)