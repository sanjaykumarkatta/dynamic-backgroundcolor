/**
 * Created by sanjaykumarkatta on 3/1/17.
 */
var randomColor=[], uniqueColor=[];
function changeBackground() {
        randomColor = ['rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'];
        randomColor.forEach(function(value){
                if(uniqueColor.indexOf(value)==-1){
                        uniqueColor.push(value);
                        document.body.style.background = randomColor;

                }
                else changeBackground();
        });
}
setInterval(function(){changeBackground()}, 10000);

