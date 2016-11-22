var Url= localStorage.getItem("URL");
var url = Url.split(",");
var ENV 
var Request = {
	QueryString : function(val) {
	var uri = window.location.search;
	var re = new RegExp("" +val+ "=([^&?]*)", "ig");
	return ((uri.match(re))?(uri.match(re)[0].substr(val.length+1)):"");
	}
}
var ENV = Request.QueryString("env");
   
   // alert(window.location.pathname)
document.addEventListener("plusready", function() {
    // 注册返回按键事件  
    plus.key.addEventListener('backbutton', function() {  
        // 事件处理  
        if(document.title=='引导页'){
        	plus.nativeUI.confirm("退出程序？", function(event) {  
	            if (event.index){  
	                plus.runtime.quit();  
	            }  
        	}, null, ["取消", "确定"]); 
        }else{
        	//window.location.href="../index.html?env="+ENV
        	history.back()
        }
    }, false);  
});  
window.onload = function(){ 
	$('img').each(function() {
		if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) { 
			this.src = '../img/index/dog.jpg';  
		} 
	});
}