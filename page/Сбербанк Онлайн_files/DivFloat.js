function DivFloat(a,c,b){this.topLimit=(c==null)?63:c;this.topMargin=(b==null)?12:b;this.obj;this.floatTimer;this.id=a;this.init=function(d){if(d==null){d=this;}d.obj=ensureElement(d.id);d.move();};this.floatEffect=function(h,g,e){if(e==null){e=this;}var f=(g-h)/8;if(f<5&&f>0){f=5;}if(f<0&&f>-5){f=-5;}var d=h+f;if(d>g&&f>0||d<g&&f<0){d=g;}e.obj.style.top=d+"px";if(f>0&&d<g||f<0&&d>g){this.floatTimer=setTimeout(function(){e.floatEffect(d,g,e);},20);}};this.move=function(){if(!(this.obj!=undefined&&this.obj!=null)){return;}var e=getScrollTop();var f=screenSize();var i=this.topLimit;if(this.obj.style.top!=""){var g=/\d*/;i=parseInt(g.exec(this.obj.style.top));}var d=this.obj.offsetHeight;if(d+this.topMargin>=f.h){e=i-this.topMargin;}if(e<this.topLimit){e=this.topLimit-this.topMargin;}var h=e+this.topMargin;if(i!=h){}clearTimeout(this.floatTimer);this.floatEffect(i,h,this);};this.doOnScroll=function(){var f;var d=window.onscroll;var e=this;window.onscroll=function(){if(d!=null){d();}clearTimeout(f);f=setTimeout(function(){e.move();},50);};};if(typeof(a)!="string"){this.obj=a;}else{doOnLoad(this.init,this);}}