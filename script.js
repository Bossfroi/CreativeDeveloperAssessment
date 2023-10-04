let opacity = 0;
        let headingDuration = 2000;
        let logoduration = 4000;
        let scaleTimeout;
        let scale = 1;

        function fadeInAndOut(elementId) {
            const element = document.getElementById(elementId);
            element.style.opacity = 1;
            setTimeout(() => {
                element.style.opacity = 0;
            }, 1300);
        }
        function fadeInAndOuthead() {
            const elementhead = document.getElementById("subhead");
            elementhead.style.opacity = 0;
            setTimeout(() => {
                elementhead.style.opacity = 1;
            
            }, 3000);
        }
        function learnmore() {
            const elementlearn = document.getElementById("learnmore");
            elementlearn.style.opacity = 0;
            setTimeout(() => {
                elementlearn.style.opacity = 1;
                elementlearn.style.transition = "opacity 0.5s ease-in-out, left 0.2s ease-in-out";
            }, 3500);
        }
   
        function scaleHeading() {  
            const headline1 = document.getElementById("headline1");
            if (opacity < 1) {
                setTimeout(() => {
                    headline1.style.left = "100px";
                    headline1.style.opacity = 1;
                }, headingDuration / 8);
            } else if (opacity === 1 && headline1.style.left === "0px") {
                headline1.style.opacity = 0;
                setTimeout(() => {
                    headline1.style.left = "300px";
                }, headingDuration / 100);
            } else {
                headline1.style.display = "none";
            }
            if (scale > 0) {
                scaleTimeout = setTimeout(() => {
                    headline1.style.transform = `scale(${scale})`;
                    scale -= 0.01;
                    headline1.style.opacity -= 0;
                    scaleHeading();
                }, headingDuration / 100);
            }
        }

        function slideHeading2() {
            const position = 40;
            const headline2 = document.getElementById("headline2");
            if (opacity < 1) {
                setTimeout(() => {
                    headline2.style.opacity = 1;
                    headline2.style.left = "0";
                }, headingDuration / 1);
            } else if (opacity === 1) {
                headline2.style.opacity = 0;
                setTimeout(() => {
                    headline2.style.left = "300px";
                }, headingDuration / 100);
            } else {
                headline2.style.display = "none";
            }
            if (scale > 0) {
                scaleTimeout = setTimeout(() => {
                    headline2.style.left = (parseFloat(headline2.style.left) + position) + "px";
                    slideHeading2();
                }, headingDuration /2000);
            }
        }

        
    function logos() {
    const positionSlideLogo = 70; 
    const logoSlide = document.getElementById("logokodeg"); 
    if (headline2.style.opacity = 1) {
        scaleTimeout = setTimeout(() => {
            logoSlide.style.opacity
            const currentleft = (logoSlide.style.left) || 700;
            logoSlide.style.left = (currentleft + positionSlideLogo) + "px";
        }, logoduration / 2300);
    if (opacity < 1) {
                setTimeout(() => {      
                    logoSlide.style.opacity = 1;   
                }, logoduration / 200);
            } else if (opacity === 1) {
                logoelem.style.opacity = 1;
                setTimeout(() => {
                }, logoduration / 1200);
            } else {
                logoSlide.style.display = "none";
            }
          }
               
        }
        
        function replay() {
            const position = 40;
            const headline2 = document.getElementById("reply");
            if (opacity < 1) {
                setTimeout(() => {
                    headline2.style.opacity = 1;
                    headline2.style.left = "0";
                }, headingDuration / 1);
            } else if (opacity === 1) {
                headline2.style.opacity = 0;
                setTimeout(() => {
                    headline2.style.left = "300px";
                }, headingDuration / 100);
            } else {
                headline2.style.display = "none";
            }
            if (scale > 0) {
                scaleTimeout = setTimeout(() => {
                    headline2.style.left = (parseFloat(headline2.style.left) + position) + "px";
                    replay();
                }, headingDuration /2000);
            }
        }

        

        window.onload = function () {
        
        fadeInAndOut("girl");
            scaleHeading();
            slideHeading2(); 
            fadeInAndOuthead();
            learnmore();
            logos();
            replay();
        }
       