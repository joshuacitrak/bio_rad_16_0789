function startAd(){  
    var bgtl = new TimelineLite();
        bgtl.from("#bradBackground2", .8, {opacity:0}, 10.6)
            .to("#bradBackground2", .8, {opacity:0, scale:.7}, 13.8)
            .from("#bradBackground3", .8, {scale:4, x:180, y:60, opacity:0}, 13.8);
    
    var ctl = new TimelineLite();
        ctl.to("#bradBigCirc", 1, {scale:0, x:-110, y:-50, ease: Power4.easeOut});
    
    var smctl = new TimelineLite();
        smctl.to("#bradSmCirc", 1, {scale:.8, ease: Power1.easeOut})
            .to("#bradBackground4", .005,{opacity:0}, 0)
            .to("#bradSmCirc", 1, {scale:1.2, ease: Power1.easeOut}, "+=.4")
            .to("#bradSmCirc", 1, {scale:.8, ease: Power1.easeOut}, "+=.4")
            .to("#bradSmCirc", .4, {y:103, ease: Power4.easeOut}, "-=.4")
            .to("#bradSmCirc", 1, {scale:1.2, ease: Power1.easeOut}, "+=.4")
            .to("#bradSmCirc", 1, {scale:.8, ease: Power1.easeOut}, "+=.4")
            .to("#bradSmCirc", .4, {y:232, ease: Power4.easeOut})
            .to("#bradSmCirc", 1, {scale:1.2, ease: Power1.easeOut}, "+=.4")
            .to("#bradSmCirc", 1, {scale:1, ease: Power1.easeOut}, "+=.4")
            .to("#bradSmCirc", .6, {y:260, ease: Power4.easeOut}, "+=.4")
            .to("#bradSmCirc", 1.4, {rotationZ:25.5, scale:1.2, transformOrigin:"-320px 120px", ease: Power1.easeOut})
            .to("#bradBackground2", 2, {x:-395, y:92})
            .to("#bradSmCirc", .4, {opacity:0}, "-=.8");
    
    var ttl = new TimelineLite();
        ttl.from("#t4", .8, {scale:0, opacity:0, ease: Power3.easeOut}, 13.6)
        .from("#t5", .8, {scale:0, opacity:0, ease: Power3.easeOut}, 13.6);
        
    var tbtl1 = new TimelineLite();
    tbtl1.from("#t1", .6, {opacity:0, ease: Power3.easeOut});
    
    var tbtl2 = new TimelineLite();
    tbtl2.from("#t2", .6, {opacity:0, ease: Power3.easeOut});
    
    var tbtl3 = new TimelineLite();
    tbtl3.from("#t3", .6, {opacity:0, ease: Power3.easeOut})
        .to("#t1", .2, {opacity:0, ease: Power3.easeOut}, 3)
        .to("#r1_1",.1, {scaleX:1.2, opacity:1, ease:Power4.easeOut}, 3)
        .to("#r1_2",.1, {scaleX:1.2, opacity:1, ease:Power4.easeOut}, 3)
        .to("#r1_3",.1, {scaleX:1.2, opacity:.1, ease:Power4.easeOut}, 3)
        .to("#r1_4",.1, {scaleX:1.2, opacity:1, ease:Power4.easeOut}, 3)
        .to("#r1_5",.1, {scaleX:1.2, opacity:1, ease:Power4.easeOut}, 3)
        .to("#r1_6",.1, {scaleX:1.2, opacity:1, ease:Power4.easeOut}, 3)
        .to("#r1_1",.1, {opacity:.6, ease:Power4.easeOut}, 3.1)
        .to("#r1_2",.1, {opacity:.5, ease:Power4.easeOut}, 3.1)
        .to("#r1_3",.1, {opacity:.7, ease:Power4.easeOut}, 3.1)
        .to("#r1_4",.1, {opacity:4, ease:Power4.easeOut}, 3.1)
        .to("#r1_5",.1, {opacity:.6, ease:Power4.easeOut}, 3.1)
        .to("#r1_6",.1, {opacity:.5, ease:Power4.easeOut}, 3.1)
        .to("#r1_1",.1, {opacity:1, ease:Power4.easeOut}, 3.2)
        .to("#r1_2",.1, {opacity:1, ease:Power4.easeOut}, 3.2)
        .to("#r1_3",.1, {opacity:1, ease:Power4.easeOut}, 3.2)
        .to("#r1_4",.1, {opacity:1, ease:Power4.easeOut}, 3.2)
        .to("#r1_5",.1, {opacity:1, ease:Power4.easeOut}, 3.2)
        .to("#r1_6",.1, {opacity:1, ease:Power4.easeOut}, 3.2)
        .to("#r1_1",.1, {scaleX:2.5, opacity:0, ease:Power4.easeOut}, 3.3)
        .to("#r1_2",.1, {scaleX:2.5, opacity:0, ease:Power4.easeOut}, 3.3)
        .to("#r1_3",.1, {scaleX:2.5, opacity:0, ease:Power4.easeOut}, 3.3)
        .to("#r1_4",.1, {scaleX:2.5, opacity:0, ease:Power4.easeOut}, 3.3)
        .to("#r1_5",.1, {scaleX:2.5, opacity:0, ease:Power4.easeOut}, 3.3)
        .to("#r1_6",.1, {scaleX:2.5, opacity:0, ease:Power4.easeOut}, 3.3)
    
        .to("#t2", .2, {opacity:0, ease: Power3.easeOut}, 3)
        .to("#r2_1",.1, {scaleX:1.2, opacity:1, ease:Power4.easeOut}, 3)
        .to("#r2_2",.1, {scaleX:1.2, opacity:1, ease:Power4.easeOut}, 3)
        .to("#r2_3",.1, {scaleX:1.2, opacity:.1, ease:Power4.easeOut}, 3)
        .to("#r2_4",.1, {scaleX:1.2, opacity:1, ease:Power4.easeOut}, 3)
        .to("#r2_5",.1, {scaleX:1.2, opacity:1, ease:Power4.easeOut}, 3)
        .to("#r2_6",.1, {scaleX:1.2, opacity:1, ease:Power4.easeOut}, 3)
        .to("#r2_7",.1, {scaleX:1.2, opacity:1, ease:Power4.easeOut}, 3)
        .to("#r2_8",.1, {scaleX:1.2, opacity:1, ease:Power4.easeOut}, 3)
        .to("#r2_9",.1, {scaleX:1.2, opacity:1, ease:Power4.easeOut}, 3)
        .to("#r2_1",.1, {opacity:.7, ease:Power4.easeOut}, 3.1)
        .to("#r2_2",.1, {opacity:.9, ease:Power4.easeOut}, 3.1)
        .to("#r2_3",.1, {opacity:.8, ease:Power4.easeOut}, 3.1)
        .to("#r2_4",.1, {opacity:8, ease:Power4.easeOut}, 3.1)
        .to("#r2_5",.1, {opacity:.6, ease:Power4.easeOut}, 3.1)
        .to("#r2_6",.1, {opacity:.7, ease:Power4.easeOut}, 3.1)
        .to("#r2_7",.1, {opacity:.6, ease:Power4.easeOut}, 3.1)
        .to("#r2_8",.1, {opacity:8, ease:Power4.easeOut}, 3.1)
        .to("#r2_9",.1, {opacity:9, ease:Power4.easeOut}, 3.1)
        .to("#r2_1",.1, {opacity:1, ease:Power4.easeOut}, 3.2)
        .to("#r2_2",.1, {opacity:1, ease:Power4.easeOut}, 3.2)
        .to("#r2_3",.1, {opacity:1, ease:Power4.easeOut}, 3.2)
        .to("#r2_4",.1, {opacity:1, ease:Power4.easeOut}, 3.2)
        .to("#r2_5",.1, {opacity:1, ease:Power4.easeOut}, 3.2)
        .to("#r2_6",.1, {opacity:1, ease:Power4.easeOut}, 3.2)
        .to("#r2_7",.1, {opacity:1, ease:Power4.easeOut}, 3.2)
        .to("#r2_8",.1, {opacity:1, ease:Power4.easeOut}, 3.2)
        .to("#r2_9",.1, {opacity:1, ease:Power4.easeOut}, 3.2)
        .to("#r2_1",.1, {scaleX:2.5, opacity:0, ease:Power4.easeOut}, 3.3)
        .to("#r2_2",.1, {scaleX:2.5, opacity:0, ease:Power4.easeOut}, 3.3)
        .to("#r2_3",.1, {scaleX:2.5, opacity:0, ease:Power4.easeOut}, 3.3)
        .to("#r2_4",.1, {scaleX:2.5, opacity:0, ease:Power4.easeOut}, 3.3)
        .to("#r2_5",.1, {scaleX:2.5, opacity:0, ease:Power4.easeOut}, 3.3)
        .to("#r2_6",.1, {scaleX:2.5, opacity:0, ease:Power4.easeOut}, 3.3)
        .to("#r2_7",.1, {scaleX:2.5, opacity:0, ease:Power4.easeOut}, 3.3)
        .to("#r2_8",.1, {scaleX:2.5, opacity:0, ease:Power4.easeOut}, 3.3)
        .to("#r2_9",.1, {scaleX:2.5, opacity:0, ease:Power4.easeOut}, 3.3)
    
        .to("#t3", .2, {opacity:0, ease: Power3.easeOut}, 3)
        .to("#r3_1",.1, {scaleX:1.2, opacity:1, ease:Power4.easeOut}, 3)
        .to("#r3_2",.1, {scaleX:1.2, opacity:1, ease:Power4.easeOut}, 3)
        .to("#r3_4",.1, {scaleX:1.2, opacity:1, ease:Power4.easeOut}, 3)
        .to("#r3_5",.1, {scaleX:1.2, opacity:1, ease:Power4.easeOut}, 3)
        .to("#r3_7",.1, {scaleX:1.2, opacity:1, ease:Power4.easeOut}, 3)
        .to("#r3_8",.1, {scaleX:1.2, opacity:1, ease:Power4.easeOut}, 3)
        .to("#r3_9",.1, {scaleX:1.2, opacity:1, ease:Power4.easeOut}, 3)
        .to("#r3_1",.1, {opacity:.7, ease:Power4.easeOut}, 3.1)
        .to("#r3_2",.1, {opacity:.9, ease:Power4.easeOut}, 3.1)
        .to("#r3_4",.1, {opacity:8, ease:Power4.easeOut}, 3.1)
        .to("#r3_5",.1, {opacity:.6, ease:Power4.easeOut}, 3.1)
        .to("#r3_7",.1, {opacity:.6, ease:Power4.easeOut}, 3.1)
        .to("#r3_8",.1, {opacity:8, ease:Power4.easeOut}, 3.1)
        .to("#r3_9",.1, {opacity:9, ease:Power4.easeOut}, 3.1)
        .to("#r3_1",.1, {opacity:1, ease:Power4.easeOut}, 3.2)
        .to("#r3_2",.1, {opacity:1, ease:Power4.easeOut}, 3.2)
        .to("#r3_4",.1, {opacity:1, ease:Power4.easeOut}, 3.2)
        .to("#r3_5",.1, {opacity:1, ease:Power4.easeOut}, 3.2)
        .to("#r3_7",.1, {opacity:1, ease:Power4.easeOut}, 3.2)
        .to("#r3_8",.1, {opacity:1, ease:Power4.easeOut}, 3.2)
        .to("#r3_9",.1, {opacity:1, ease:Power4.easeOut}, 3.2)
        .to("#r3_1",.1, {scaleX:2.5, opacity:0, ease:Power4.easeOut}, 3.3)
        .to("#r3_2",.1, {scaleX:2.5, opacity:0, ease:Power4.easeOut}, 3.3)
        .to("#r3_4",.1, {scaleX:2.5, opacity:0, ease:Power4.easeOut}, 3.3)
        .to("#r3_5",.1, {scaleX:2.5, opacity:0, ease:Power4.easeOut}, 3.3)
        .to("#r3_7",.1, {scaleX:2.5, opacity:0, ease:Power4.easeOut}, 3.3)
        .to("#r3_8",.1, {scaleX:2.5, opacity:0, ease:Power4.easeOut}, 3.3)
        .to("#r3_9",.1, {scaleX:2.5, opacity:0, ease:Power4.easeOut}, 3.3);
    
    var ctatl = new TimelineLite();
    ctatl.from("#bradFooter", .4, {opacity:0,ease: Power3.easeOut})
        .from("#bradFooterImageContainer", .8, {opacity:0,ease: Power3.easeOut}, "-=.4")
        .from("#bradFooterCTA", .8, { opacity:0,ease: Power3.easeOut}, "-=.8");
    
    tl.add(bgtl, 0);
    tl.add(ctl, 0);
    tl.add(smctl, .4);
    tl.add(tbtl1, .4);
    tl.add(tbtl2, 3.8);
    tl.add(tbtl3, 7.2);
    tl.add(ttl, .4);
    tl.add(ctatl, 14);
    tl.totalDuration(15);
};

function addListeners(){
    document.getElementById("bradContent").addEventListener("click", clickthrough);
};

function clickthrough() {
    EB.clickthrough();
}


function animationComplete(evt){
};

function checkInit() {
              if (!EB.isInitialized()) {
                 EB.addEventListener(EBG.EventName.EB_INITIALIZED, onInit); 
                 // This code checks whether the EB object is initialized, if the object is initialized, it
                     //launches the function "onInit", otherwise "EB_INITIALIZED" event. 
              }
              else {
                      onInit();
               }         
               function onInit() {
    
    TweenLite.set("#bradContainer", {opacity:1});
    addListeners();
    startAd();
              } 
     }

window.addEventListener('load', checkInit);

var tl = new TimelineLite({onUpdate:updateSlider});
tl.eventCallback("onComplete", animationComplete);


$("#play").click(function() {
  //play() only plays forward from current position. If timeline has finished, play() has nowhere to go.
  //if the timeline is not done then play() or else restart() (restart always restarts from the beginning).

  if(tl.progress() != 1){
    //carl just changed this again
		tl.play();
  } else {
    tl.restart();
  }
});
		
$("#pause").click(function() {
		tl.pause();
});
		
$("#restart").click(function() {
		tl.restart();
});		
	
$("#slider").slider({
  range: false,
  min: 0,
  max: 100,
  step:.1,
  slide: function ( event, ui ) {
    tl.pause();
    //adjust the timeline's progress() based on slider value
    tl.progress( ui.value/100 );
    }
});	
		
function updateSlider() {
  $("#slider").slider("value", tl.progress() *100);
} 	