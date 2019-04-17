questions=[["Which Indian hill station gets its name from the Tibetan words that mean ‘land of the thunderbolt’?","Gangtok","Aizawl","Darjeeling","Kohima","Darjeeling"],
["Which one of these yogasanas is performed by lying on one’s back?","Bhujangasana","Padmasana","Garudasana","Shavasana","Shavasana"],
["Tamarind juice is a key ingredient in which of these dishes?","Idli","Dosa","Sambhar","Pongal","Sambhar"],
["Who is the first Indian female wrestler to receive the Rajiv Gandhi Khel Ratna Award?","Geeta Phogat","Sakshi Malik","Babita Kumari","Vinesh Phogat","Sakshi Malik"],
["Which one of these names of Lord Vishnu is derived from the Sanskrit for ‘lotus’?","Jagannath","Keshava","Madhava","Padmanabha","Padmanabha"]];
//onclick start
var a=0
var click=0;
var q=0;
var score=0;
function start() {
	document.getElementById('q_box').innerHTML=[questions[a][0]];
	document.getElementById('op1').innerHTML=[questions[a][1]];
	document.getElementById('op2').innerHTML=[questions[a][2]];
	document.getElementById('op3').innerHTML=[questions[a][3]];
	document.getElementById('op4').innerHTML=[questions[a][4]];
}
function next() {
	a=a+1;
	click=0;
	console.log(q);
	if(q==5){
		document.getElementById('op1').style.display='none';
		document.getElementById('op2').style.display='none';
		document.getElementById('op3').style.display='none';
		document.getElementById('op4').style.display='none';
		document.getElementById('q_box').style.display='none';
		document.getElementById('scorebox').style.left="750px";
		document.getElementById('scorebox').style.top="400px";
	}
	else{
		start();
	}
}
function check(z) {
	if(click==0){
		q+=1;
		if(questions[a][z]==questions[a][5]){
			click=1;
			score+=1;
			document.getElementById('scorebox').innerHTML=score;
			document.getElementById("op"+z).style.backgroundColor='green';
			setTimeout(function(){
				document.getElementById('op1').style.backgroundColor='#3498DB';
				document.getElementById('op2').style.backgroundColor='#3498DB';
				document.getElementById('op3').style.backgroundColor='#3498DB';
				document.getElementById('op4').style.backgroundColor='#3498DB';
				next();
			},2000);
		}
		else{
			document.getElementById("op"+z).style.backgroundColor='red';
			click=1;
			ind=questions[a].indexOf(questions[a][5]);
			setTimeout(function(){
				document.getElementById("op"+ind).style.backgroundColor='green';
			},1500);
			setTimeout(function(){
				document.getElementById('op1').style.backgroundColor='#3498DB';
				document.getElementById('op2').style.backgroundColor='#3498DB';
				document.getElementById('op3').style.backgroundColor='#3498DB';
				document.getElementById('op4').style.backgroundColor='#3498DB';
				next();
			},4000);
		}
	}
	
}
