var eye={openEvents:"mousedown touchstart",closeEvents:"mouseup mouseleave touchend",closed:"mask-closed",opened:"mask-opened",macClosed:"mac-closed",macOpened:"mac-opened",position:{top:0,bottom:0,left:0,right:0},safariMac:navigator.userAgent.indexOf("Safari")!=-1&&navigator.userAgent.indexOf("Mac")!=-1&&navigator.userAgent.indexOf("Chrome")==-1,open:function(){var a=$(".password-div");!this.safariMac?a.removeClass(this.closed).addClass(this.opened):a.removeClass(this.macClosed).addClass(this.macOpened);$("#password").removeAttr("type");},close:function(){var a=$(".password-div");!this.safariMac?a.removeClass(this.opened).addClass(this.closed):a.removeClass(this.macOpened).addClass(this.macClosed);$("#password").attr("type","password");},cleanup:function(){var a=$(".password-div");!this.safariMac?a.removeClass(eye.closed):a.removeClass(this.macClosed);$("#password").attr("type","password");},isIn:function(b,a,c){return a<=b&&b<=c;},isInRectangle:function(b,a){return this.isIn(b.pageX,a.left,a.right)&&this.isIn(b.pageY,a.top,a.bottom);},blink:function(){$("body").click(function(){eye.cleanup();});var a=$("#password").attr("type","password");a.keyup(function(){if(!!$(this).val()){eye.close();}else{eye.cleanup();}});var b=0;$(".password-div").bind(this.openEvents,function(c){if(!!$(".eye-bool").attr("in")&&!!a.val()){if(c.button==0){eye.open();b=setInterval(function(){},50);return true;}return false;}}).bind(this.closeEvents,function(){eye.close();clearInterval(b);}).bind("click",function(d){var c=$(".password-div");if(!!c.hasClass(eye.closed)||!!c.hasClass(eye.macClosed)){d.stopPropagation();}});},locate:function(){var a=$(".password-div");var c=a.offset();this.position.top=c.top;this.position.bottom=this.position.top+a.height();var b=a.width();this.position.left=!this.safariMac?c.left+(4/5)*b:c.left+(3/5)*b;this.position.right=!this.safariMac?this.position.left+b:this.position.left+(4/5)*b;},changeCursor:function(a){this.locate();if(eye.isInRectangle(a,this.position)){$("#password").css("cursor","pointer");$(".eye-bool").attr("in","in");}else{$("#password").css("cursor","text");$(".eye-bool").removeAttr("in");}},makeBlinks:function(){$(".password-div").bind("mousemove focusin focusout mouseover",function(a){eye.changeCursor(a);}).removeClass(this.opened).removeClass(this.closed).removeClass(this.macClosed).removeClass(this.macOpened);if($(".eye-bool").val()=="true"){this.blink();}}};