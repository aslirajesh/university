var emoji=["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png"];
var number=[];
function board() {
	for(var i=0; i<16; i++){
		document.getElementById('b_box').innerHTML+=("<div class='num' id='num"+i+"' onclick='chh("+i+")'></div>");
	}
	shuffle();
	
	for (var j = 0; j < emoji.length; j++) {
		k=('url('+emoji[j]);
		document.getElementById("num"+j).style.backgroundImage=k;
		document.getElementById("num"+j).innerHTML='<img src=Green.jpg />'
	}

	

}

function shuffle(){

	for(var i=0;i<16;i++){
		x=Math.floor(Math.random()*16);

		var temp = emoji[i];
		emoji[i] = emoji[x];
		emoji[x] = temp;
	}
	
}



var clickCount = 0;
var firstEmoji;
var firstEmojiIdd;
var secondEmoji;
var secondEmojiIdd;
var openlist=[];

function chh(idd){
	
	//increase the click count
	if(openlist.includes(idd)==false){
		clickCount++;
	}
	
	document.getElementById("num"+idd).innerHTML='';
	
	//click count is one
	if(clickCount == 1 ){
		if(openlist.includes(idd)==false){
			firstEmoji = emoji[idd]
			firstEmojiIdd = idd;
			openlist.push(firstEmojiIdd);
		}
		
	}

	//click count is two
	else{
		secondEmoji = emoji[idd];
		secondEmojiIdd = idd;
		if(firstEmojiIdd!=secondEmojiIdd && openlist.includes(secondEmojiIdd)==false){
			if(firstEmoji ==  secondEmoji){

				
				openlist.push(secondEmojiIdd);
				console.log(openlist);
				clickCount=0;

			}
			else{

				setTimeout(function(){

					document.getElementById("num"+firstEmojiIdd).innerHTML='<img src=Green.jpg />'
					document.getElementById("num"+secondEmojiIdd).innerHTML='<img src=Green.jpg />'
				},500)

				openlist.pop();
				console.log(openlist);
				clickCount=0;
			}
		}
	}
	
}