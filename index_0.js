


const Area01Element = document.getElementById('Area01');
//Area01Element.addEventListener('click', itemclick(1) );
Area01Element.addEventListener('click', function() {
	//alert("Area01");
	document.getElementById('App01').style.visibility='visible';
	document.getElementById('showbox').style.visibility='visible';
	document.getElementById('App').style.visibility='visible';   
	document.getElementById('App02').style.visibility='hidden';
	document.getElementById('App03').style.visibility='hidden';
	document.getElementById('App04').style.visibility='hidden'; 
	document.getElementById('App05').style.visibility='hidden';  
	console.log('Area1 被點擊了！');
} );
const Area02Element = document.getElementById('Area02');
Area02Element.addEventListener('click', function() {
	document.getElementById('App01').style.visibility='visible';
	document.getElementById('showbox').style.visibility='hidden';
	document.getElementById('App').style.visibility='visible';  
	document.getElementById('App02').style.visibility='visible'; 
	document.getElementById('App03').style.visibility='hidden';
	document.getElementById('App04').style.visibility='hidden';
	document.getElementById('App05').style.visibility='hidden';  
	console.log('Area2 被點擊了！');
} );
const Area03Element = document.getElementById('Area03');
Area03Element.addEventListener('click', function() {
	document.getElementById('App01').style.visibility='visible';
	document.getElementById('showbox').style.visibility='hidden';
	document.getElementById('App').style.visibility='visible';  
	document.getElementById('App02').style.visibility='hidden'; 
	document.getElementById('App03').style.visibility='visible';
	document.getElementById('App04').style.visibility='hidden';  
	document.getElementById('App05').style.visibility='hidden';  
	console.log('Area3 被點擊了！');
} );
//onclick="itemclick(4);show04time();  "
const Area04Element = document.getElementById('Area04');
Area04Element.addEventListener('click', function() {
	document.getElementById('App01').style.visibility='visible';
	document.getElementById('showbox').style.visibility='hidden';
	document.getElementById('App').style.visibility='visible';  
	document.getElementById('App02').style.visibility='hidden'; 
	document.getElementById('App03').style.visibility='hidden';
	document.getElementById('App04').style.visibility='visible';
	document.getElementById('App05').style.visibility='hidden';    
	console.log('Area4 被點擊了！');
} );
//onclick="itemclick(5); "
const Area05Element = document.getElementById('Area05');
Area05Element.addEventListener('click', function() {
	document.getElementById('App01').style.visibility='visible';
	document.getElementById('showbox').style.visibility='hidden';
	document.getElementById('App').style.visibility='visible';  
	document.getElementById('App02').style.visibility='hidden'; 
	document.getElementById('App03').style.visibility='hidden';
	document.getElementById('App04').style.visibility='hidden'; 
	document.getElementById('App05').style.visibility='visible';   
	console.log('Area5 被點擊了！');
} );



const AreaApp03_01Element = document.getElementById('AreaApp03_01');
AreaApp03_01Element.addEventListener('click', function() {
	alert('沒有任何提醒清單可供編輯'); 
} );
const AreaApp03_02Element = document.getElementById('AreaApp03_02');
AreaApp03_02Element.addEventListener('click', function() {
	alert('手機記憶體空間不足, 無法新增提醒事項, 請先清除記憶體空間'); 
} );
const AreaApp03_03Element = document.getElementById('AreaApp03_03');
AreaApp03_03Element.addEventListener('click', function() {
	alert('所有清單已清除'); 
} );
//id=AreaApp03_01 onclick="javascript:var vv=confirm('沒有任何提醒清單可供編輯'); " 
//id=AreaApp03_02 onclick="javascript:var vv=confirm('手機記憶體空間不足, 無法新增提醒事項, 請先清除記憶體空間'); " 
//id=AreaApp03_03 onclick="javascript:var vv=confirm('所有清單已清除'); " 



//onclick="show04time(); buttonclick(99); "
const AreaApp04Element = document.getElementById('AreaApp04');
AreaApp04Element.addEventListener('click', function() {
	alert('Area4'); 
} );

const AreaApp05Element = document.getElementById('AreaApp05');
AreaApp05Element.addEventListener('click', function() {
	alert('記憶體不足, 請重啟程式'); 
} );





const App00Element = document.getElementById('App00');
App00Element.addEventListener('click', function() {	
	var vv=confirm('⠀⠀ ⠀    　　開啟相機\u000d請您確認是否開啟相機功能？當您按下 是 按鈕後，將會傳送開啟相機記錄到電子柵欄伺服器。'); 
	var vv=confirm('⠀⠀ ⠀    　指令尚未生效\u000d 請等待數分鐘，或稍後重試。\u000d⠀⠀ ⠀     user:00200746\u000d Request Server Fail Error Domain=\u000d thinking.mobileit.tw \u000d⠀⠀ ⠀    Code=400 (null)\u000d UserInfo={Error={code = 111;\u000d message = DeviceRestrition\u000d⠀⠀ ⠀          fail;}}\u000d    OS:14.4,\u000d    appVersion:1.17.27');
} );


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 創建一個函數來獲取當前時間並更新到頁面上
function updateClock() {
    const clockElement = document.getElementById('showbox');  // 取得顯示時間的 DOM 元素
    const now = new Date();                                 // 獲取當前日期與時間

    // 格式化時間（補零，確保是兩位數）

    const years = String(now.getFullYear());

    const months = String(now.getMonth() + 1); // 取得月份 (0-11)，所以要 +1
    const days = String(now.getDate() ); // 取得日期 (1-31)

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // 更新頁面上顯示的時間
    //clockElement.textContent = `${years}${months}${days}${hours}:${minutes}:${seconds}`;
    clockElement.innerHTML = years + '/' + months + '/' + days + '<br>' + hours + ':' + minutes + ':' + seconds ;
}

// 設置每秒調用一次 updateClock 函數，實現動態更新
setInterval(updateClock, 1000);

// 當頁面載入時馬上顯示當前時間
updateClock();





