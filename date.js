var d = new Date();
var hr = d.getHours()
var greeting = ""
var greetingSpan = document.getElementById("greeting")

if (hr == 24 || hr < 12) {
    greeting = "morning"
}else if(hr > 11 && hr < 17){
    greeting = "afternoon"
}else{
    greeting = "evening"
} 

greetingSpan.innerHTML = greeting

var date = document.getElementById("date")
var month = document.getElementById("mon")
var year = document.getElementById("yr")
var day = document.getElementById("day")

switch (d.getMonth()){ // setting the month
    case 0: 
        month.innerHTML = "jan"
        break
    case 1: 
        month.innerHTML = "feb"
        break    
    case 2: 
        month.innerHTML = "mar"
        break
    case 3: 
        month.innerHTML = "apr"
        break
    case 4: 
        month.innerHTML = "may"
        break
    case 5: 
        month.innerHTML = "jun"
        break
    case 6: 
        month.innerHTML = "jul"
        break
    case 7: 
        month.innerHTML = "aug"
        break
    case 8: 
        month.innerHTML = "sep"
        break
    case 9: 
        month.innerHTML = "oct"
        break
    case 10: 
        month.innerHTML = "nov"
        break
    case 11: 
        month.innerHTML = "dec"
        break    
}

switch (d.getDay()){ // setting the day
    case 0: 
        day.innerHTML = "s<br>u<br>n"
        break
    case 1: 
        day.innerHTML = "m<br>o<br>n"
        break    
    case 2: 
        day.innerHTML = "t<br>u<br>e"
        break
    case 3: 
        day.innerHTML = "w<br>e<br>d"
        break
    case 4: 
        day.innerHTML = "t<br>h<br>u"
        break
    case 5: 
        day.innerHTML = "f<br>r<br>i"
        break
    case 6: 
        day.innerHTML = "s<br>a<br>t"
        break
}


date.innerHTML = d.getDate() // setting the date
year.innerHTML = d.getFullYear() // setting the year