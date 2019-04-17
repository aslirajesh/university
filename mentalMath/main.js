<script type="text/javascript">
		// generating default limit
		var limit=document.getElementById('range').value;

		// default generate number
		showVal(limit)

		// generating random number

		function showVal(limit) {
			for(i=0;i<4;i++){
				if(document.getElementsByClassName('op')[i].checked){
					var operator=(document.getElementsByClassName('op')[i].value)
				}
			}
			var a=Math.round(Math.random()*limit);
			var b=Math.round(Math.random()*limit);
			s_i_b=(a+"  "+operator+"  "+b);
			document.getElementById('question_box').innerHTML=s_i_b;
		}
		
		time=10;
		function timer(){
			if (time>0) {
				document.getElementById('time_box').innerHTML=time;
				setTimeout(timer,1000);
				var w=28*time;
				document.getElementById('ln').style.width=28*time-28+"px";
				time--;
				if (time==0) {
					document.getElementById('h4').innerHTML="Your Score"
					document.getElementById('time_box').innerHTML=ans;
					document.getElementById('question_box').style.display='none';
					document.getElementById('y_answer').style.display='none';
					document.getElementById('play').style.display='block';
				}
			}
		}
		var ans=0;
		function checkValue(){
			var Tresult=eval(s_i_b);
			var Yresult=document.getElementById('y_answer').value;
			if (Tresult==Yresult) {
				ans+=5;
				time=time+2;
				showVal(limit);
				document.getElementById('y_answer').value=""
			}
		}
	</script>