
//var vinci="Vinci" ;

//alert("hello! Vinci" + vinci) ;

//alert("hello! End") ;

function scrRT(){
	var obj1=document.getElementById('iframe_block'); 
	
	if(window.orientation==180||window.orientation==0){
		obj1.style.width=379; 
		obj1.style.top=0;
		obj1.style.left=0;
		obj1.style.transform='rotate(0deg)' ;
		obj1.style.display = 'block' ;
	}

	if(window.orientation==90){
		obj1.style.width=379; 
		obj1.style.top=-193;
		obj1.style.left=193;
		obj1.style.transform='rotate(-90deg)' ;
	}

	if(window.orientation==-90){
		obj1.style.width=379; 
		obj1.style.top=-193;
		obj1.style.left=193;
		obj1.style.transform='rotate(90deg)' ;
	}
}

window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", scrRT, false);

//alert("hello! EndLast 3") ;

