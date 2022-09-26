const stime =() =>{
	let currentDate= new Date();
	let hour= currentDate.getHours();
    let min= currentDate.getMinutes();
    let sec= currentDate.getSeconds();
    let session="AM"
    if(hour==0){
		hour=12;
	}
	if(hour>12){
		hour=hour-12;
		session="PM";
	}
	hour=(hour<10)?"0"+hour:hour;
	min=(min<10)?"0"+min:min;
	sec=(sec<10)?"0"+sec:sec;
	
	
	let time=hour+":"+ min+":"+ sec+""+ session;
	document.getElementById("sdate").innerHTML=time;
	setTimeout(stime,1000)
}
stime();