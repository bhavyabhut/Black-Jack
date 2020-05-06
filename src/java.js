
let s= {

		'Me':{
			1:{'A':[1,11]},
			2:{2:2},
			3:{3:3},
			4:{4:4},
			5:{5:5},
			6:{6:6},
			7:{7:7},
			8:{8:8},
			9:{9:9},
			10:{'J':10},
			11:{'Q':10},
			12:{'K':10},
			'brust': false,
			'score' : 0,
			'overturn':1,
			'hajar':1,
			'win':0,
			'draw' : 0,
			'loss':0,

		},
		'Dealer':{
			1:{'A':[1,11]},
			2:{2:2},
			3:{3:3},
			4:{4:4},
			5:{5:5},
			6:{6:6},
			7:{7:7},
			8:{8:8},
			9:{9:9},
			10:{'J':10},
			11:{'Q':10},
			12:{'K':10},
			'brust': false,
			'score' : 0,
			'overturn' : 0,
			'hajar' : 0,
		},
};
let j = {
		1:'A',
		2:2,
		3:3,
		4:4,
		5:5,
		6:6,
		7:7,
		8:8,
		9:9,
		10:'J',
		11:'Q',
		12:'K',		
};
function sleep(ms){
	return new Promise(resolve => setTimeout(resolve,ms));
}
async function play(person){


	if(s[person]['brust'] === false){
		if(person==='Me' && s[person]['hajar']===1){
			console.log(person);
			showcard(person);
			display(person);
			s['Dealer']['hajar'] =1;
		}else if(person==='Dealer' && s[person]['hajar']===1 ){
			s['Dealer']['hajar'] =0;
			while(s['Dealer']['score'] < 17 && s['Dealer']['brust']===false){
				console.log(person);
				showcard(person);
				display(person);
				
				s[person]['turnover'] =1;
				await sleep(1000);
			}
			if(s['Dealer']['brust']===true || s['Dealer']['score']>=17){
				msg();
			}
			s['Me']['hajar'] =0;
			console.log(s);
		}
	}	
}
 function showcard(person){
 	
 	 var choice = (Math.floor(Math.random()*12)+1);
 	 var img =document.createElement("img");
 	 img.src = "images/"+j[choice]+".png";
 	 img.style.width = "100px";
 	 img.setAttribute('class','p-2 z');
 	 if(person==="Me")
	 	document.querySelector(".myarea").appendChild(img);
	 else
	 	document.querySelector(".botarea").appendChild(img);
	 document.querySelector(".cards").play();
	 score(person,choice);	
 }
 function score(person,choice){
 	if(choice===1){
 			if(s[person]['score']+s[person][1]['A'][1] <22)
 				s[person]['score']+=s[person][1]['A'][1];
 			else if(s[person]['score']+s[person][1]['A'][0]<22)
 				s[person]['score']+=s[person][1]['A'][0];
 			else{
 				s[person][score] = 'brust';
    			s[person]['brust'] = true;
    		}
 	}
 	else if(s[person]['score']+s[person][choice][j[choice]]<=21){
 			s[person]['score'] += s[person][choice][j[choice]];
	   		console.log(s[person]['score']);
    }
    else{
    	s[person][score] = 'brust';
    	s[person]['brust'] = true;
    }
 }
 function display(person){
 	if(person==='Me'){
 		if(s[person]['brust']){
 			document.querySelector("#myscore").style.color = "red";
 			document.querySelector("#myscore").innerHTML = "Brust";
 		}
 		else
			document.querySelector("#myscore").innerHTML = s[person]['score'];
 	}
 	else{
 		if(s[person]['brust']){
 			document.querySelector("#dealerscore").style.color = "red";
 			document.querySelector("#dealerscore").innerHTML = "Brust";
 		}
 		else
			document.querySelector("#dealerscore").innerHTML = s[person]['score'];
 	}

 }
 function msg(){

	if(s['Me']['brust'] === true && s['Dealer']['brust'] === true){
		document.querySelector("#result").innerHTML = "Draw";
		s['Me']['draw']++;
		document.querySelector("#draw").innerHTML = s['Me']['draw'];
	}
	else if(s['Dealer']['brust']===true && s['Me']['brust']===false ){
		document.querySelector("#result").innerHTML = "Congrats You Won ";
		document.querySelector("#result").style.color = "green";
		s['Me']['win']++;
		document.querySelector("#win").innerHTML = s['Me']['win'];
		document.querySelector(".winsound").play();
	}
	else if (s['Dealer']['brust']===false && s['Me']['brust']===true ){
		document.querySelector("#result").innerHTML = "Opps You Lost";
		document.querySelector("#result").style.color = "red";
		s['Me']['loss']++;
		document.querySelector("#loss").innerHTML = s['Me']['loss'];
		document.querySelector(".losssound").play();
	}
	else if(s['Me']['score'] > s['Dealer']['score'] ){
		document.querySelector("#result").innerHTML = "Congrats You Won ";
		document.querySelector("#result").style.color = "green";
		s['Me']['win']++;
		document.querySelector("#win").innerHTML = s['Me']['win'];
		document.querySelector(".winsound").play();
	}
	else if(s['Me']['score'] < s['Dealer']['score']){
		document.querySelector("#result").innerHTML = "Opps You Lost";
		document.querySelector("#result").style.color = "red";
		s['Me']['loss']++;
		document.querySelector("#loss").innerHTML = s['Me']['loss'];
		document.querySelector(".losssound").play();
	}else{
		document.querySelector("#result").innerHTML = "Draw";
		s['Me']['draw']++;
		document.querySelector("#draw").innerHTML = s['Me']['draw'];
	}		
}

 function deal(){
 	if(s["Me"]["hajar"]=== 0 && s['Dealer']['turnover']===1){
 		document.querySelectorAll('.z').forEach(el => el.remove());
 		document.querySelector("#result").innerHTML = "Lets Play again!!";
 		document.querySelector("#result").style.color = "Black";
 		document.querySelector("#myscore").style.color = "white";
 		document.querySelector("#dealerscore").style.color = "white";
 		document.querySelector("#myscore").innerHTML = 0;
 		document.querySelector("#dealerscore").innerHTML = 0;
 		s['Me']['brust'] = false;
 		s['Me']['score'] = 0;
 		s['Me']['overturn'] =1;
 		s['Me']['hajar'] = 1;
 		s['Dealer']['brust'] = false;
 		s['Dealer']['score'] = 0;
 		s['Dealer']['overturn'] = 0;
 		s['Dealer']['hajar'] = 0;
 	}
 }
function sx(){
	document.querySelector(".cards").play();
}
