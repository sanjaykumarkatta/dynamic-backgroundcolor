/**
 * Created by sanjaykumarkatta on 3/1/17.
 */
var randomColor, uniqueColors = [ ],i = 0;
function changeBackground() {

        randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        if(uniqueColors.indexOf(randomColor)===-1){
                document.body.style.background = randomColor;
                document.body.style.WebkitTransition = "all 500ms linear";
                uniqueColors.push(randomColor);
                i++;
                console.log(i);
                if(i>=10){
                        clearInterval(timer);
                }
        }
        else changeBackground();
}

var timer = setInterval(function(){ changeBackground() }, 1000);

