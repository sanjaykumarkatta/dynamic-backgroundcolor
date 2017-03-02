/**
 * Created by sanjaykumarkatta on 3/1/17.
 */
(function() {

                var randomColor, uniqueColors = [], i = 0, closeInterval;
                function changeBackground(sec, dur) {

                        randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
                        if(uniqueColors.indexOf(randomColor)===-1){
                                document.body.style.background = randomColor;
                                document.body.style.WebkitTransition = "all " + sec + "s linear";
                                uniqueColors.push(randomColor);
                                i = i + sec;
                                if(i >= dur) {
                                     clearInterval(closeInterval);
                                }
                        }
                        else changeBackground();
                }

								(function(sec, dur) {
                      closeInterval = setInterval(function(){ changeBackground(sec, dur) }, sec * 1000);
                })(0.22, 10.57)
        })();
