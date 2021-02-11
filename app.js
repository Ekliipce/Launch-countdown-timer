let day_top = document.getElementById('top-day')
let day_bottom = document.getElementById('bottom-day')

let hour_top = document.getElementById('top-hour')
let hour_bottom = document.getElementById('bottom-hour')

let minute_top = document.getElementById('top-minute')
let minute_bottom = document.getElementById('bottom-minute')

let second_top = document.getElementById('top-second')
let second_bottom = document.getElementById('bottom-second')

let second = second_top.innerText
let minute = minute_top.innerText 
let hour = hour_top.innerText
let day = day_top.innerText

var zero = function(string){
    if(string.length == 1){
        string = "0" + string
    }
    return string
}

window.setInterval(function(){
    if(!(day == 0 && hour == 0 && minute == 0 && second == 0)){
        second -= 1
        if (second == -1){
            second = 59
            
            minute -= 1
            if (minute == -1){
                minute = 59

                hour-=1
                if(hour == -1){
                    hour = 23

                    day -= 1
                    day_top.innerText = day;
                    day_bottom.innerText = day;
                }
                hour_top.innerText = hour
                hour_bottom.innerText = hour
            }

            minute_top.innerText = minute
            minute_bottom.innerText = minute
        }

        second_top.innerText = second
        second_bottom.innerText = second
    }
    console.log(second_top.innerText.length)
    second_top.innerText = zero(second_top.innerText)
    second_bottom.innerText = second_top.innerText

    minute_top.innerText = zero(minute_top.innerText)
    minute_bottom.innerText = minute_top.innerText

    hour_top.innerText = zero(hour_top.innerText)
    hour_bottom.innerText = hour_top.innerText

    day_top.innerText = zero(day_top.innerText)
    day_bottom.innerText = day_top.innerText
},1000)