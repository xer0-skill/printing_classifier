function RSAObject(){this.domDataCollection=new DomDataCollection();this.domDataCollection.startInspection();if(window.addEventListener){window.addEventListener("load",UIEventCollector.initEventCollection,false);}else{if(window.attachEvent){window.attachEvent("onload",UIEventCollector.initEventCollection);}else{window.onload=UIEventCollector.initEventCollection;}}}RSAObject.prototype.toHiddenParameters=function(){addFieldWithCheck("hidden","deviceprint",this.getDevicePrint());var a=this.getDomElements();addFieldWithCheck("hidden","htmlinjection",a);addFieldWithCheck("hidden","domElements",a);var b=this.getJsEvents();addFieldWithCheck("hidden","manvsmachinedetection",b);addFieldWithCheck("hidden","jsEvents",b);};RSAObject.prototype.toSubmitFormParameters=function(a){this.toHiddenParameters();a.appendChild(getElement("deviceprint"));a.appendChild(getElement("manvsmachinedetection"));a.appendChild(getElement("htmlinjection"));a.appendChild(getElement("domElements"));a.appendChild(getElement("jsEvents"));};RSAObject.prototype.toSubmitFormElements=function(c){var b=this.getDevicePrint();var a=this.getDomElements();var e=this.getJsEvents();for(var g in c.fields){var d=c.fields[g];if(d==null){continue;}switch(d.name){case"deviceprint":d.value=b;continue;case"manvsmachinedetection":case"jsEvents":d.value=e;continue;case"htmlinjection":case"domElements":d.value=a;continue;}}};RSAObject.prototype.toRequestParameters=function(){var a=encodeURIComponent(this.getJsEvents());var c=encodeURIComponent(this.getDomElements());var b=encodeURIComponent(this.getDevicePrint());return"&deviceprint="+b+"&jsEvents="+a+"&domElements="+c;};RSAObject.prototype.getJsEvents=function(){return UIEventCollector.serialize();};RSAObject.prototype.getDomElements=function(){return this.domDataCollection.domDataAsJSON();};RSAObject.prototype.getDevicePrint=function(){return add_deviceprint();};function FSOObject(c){this.detection=c!=null&&c.fso.detection;if(this.detection){this.token=c.fso.token!=null?encodeURIComponent(c.fso.token):"";this.swfPath=c.fso.swfPath;this.sendUrl=c.fso.sendUrl;if(!/^https?:\/\//i.test(this.sendUrl)){var a=window.location;var b=a.protocol+"//"+a.hostname+(a.port&&":"+a.port);this.sendUrl=b+(this.sendUrl&&this.sendUrl.indexOf("/")===0?"":"/")+this.sendUrl;}}}FSOObject.prototype.publish=function(){try{if(this.detection){this.set();this.send();}}catch(a){}};FSOObject.prototype.set=function(){var a=document.getElementById("pmfso-set-div");if(a!=null){var e=6;var c=0;var h=0;var f=DetectFlashVer(e,c,h);if(f){var g=new Date().getTime();var b="";b=b+"<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'"+"\n";b=b+"width='1' height='1'>"+"\n";b=b+"<param name='movie' value='"+this.swfPath+"pmfso.swf?nocache="+g+"'>"+"\n";b=b+"<param name='quality' value='high'>"+"\n";b=b+"<param name='bgcolor' value=#FFFFFF>"+"\n";b=b+"<param name='allowScriptAccess' value='sameDomain'>"+"\n";b=b+"<param name='FlashVars' value='pmdata="+this.token+"&browserType="+BrowserDetect.browser+"'>"+"\n";b=b+"<embed src='"+this.swfPath+"pmfso.swf?nocache="+g+"'"+"\n";b=b+"FlashVars='pmdata="+this.token+"&browserType="+BrowserDetect.browser+"'"+"\n";b=b+"allowScriptAccess='sameDomain'"+"\n";b=b+"quality='low' bgcolor='#FFFFFF' width='1' height='1'"+"\n";b=b+"type='application/x-shockwave-flash'>"+"\n";b=b+"<noembed></noembed>"+"\n";b=b+"<noobject></noobject>"+"\n";b=b+"</embed>"+"\n";b=b+"<noobject></noobject>"+"\n";b=b+"</object>"+"\n";a.innerHTML=b;}}};FSOObject.prototype.send=function(){var a=document.getElementById("pmfso-send-div");if(a!=null){var e=6;var c=0;var h=0;var f=DetectFlashVer(e,c,h);if(f){var g=new Date().getTime();var b="";b=b+"<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'"+"\n";b=b+"width='1' height='1'>"+"\n";b=b+"<param name='movie' value='"+this.swfPath+"pmfso.swf?nocache="+g+"'>"+"\n";b=b+"<param name='quality' value='high'>"+"\n";b=b+"<param name='bgcolor' value=#FFFFFF>"+"\n";b=b+"<param name='allowScriptAccess' value='sameDomain'>"+"\n";b=b+"<param name='FlashVars' value='gotoUrl=&sendUrl="+this.sendUrl+"&browserType="+BrowserDetect.browser+"'>"+"\n";b=b+"<embed src='"+this.swfPath+"pmfso.swf?nocache="+g+"'"+"\n";b=b+"FlashVars='gotoUrl=&sendUrl="+this.sendUrl+"&browserType="+BrowserDetect.browser+"'"+"\n";b=b+"allowScriptAccess='sameDomain'"+"\n";b=b+"quality='high' bgcolor='#FFFFFF' width='1' height='1'"+"\n";b=b+"type='application/x-shockwave-flash'>"+"\n";b=b+"<noembed>"+"\n";b=b+"<"+"script>"+"\n";b=b+"</"+"script>"+"\n";b=b+" </noembed>"+"\n";b=b+"<noobject></noobject>"+"\n";b=b+"</embed>"+"\n";b=b+"<noobject></noobject>"+"\n";b=b+"</object>"+"\n";a.innerHTML=b;}}};