
function showClickedTab(event){
	var clickedId = event.target.id;
	var alltabContentElements = document.getElementsByClassName("tabContent hide");
    	for(var i=0;i<alltabContentElements.length; i++) {
        if(alltabContentElements[i].classList.value.indexOf("hide") !== -1){
            alltabContentElements[i].classList.add("hide");
            alltabContentElements[i].classList.remove("show");
        }
	}
	document.querySelector("#l1").classList.remove("active");
    	document.querySelector("#l2").classList.remove("active");
    	document.querySelector("#l3").classList.remove("active");
    	document.querySelector("#l4").classList.remove("active");
    	document.querySelector("#l5").classList.remove("active");

    	if(clickedId == "l1") {
        	document.getElementById("tamil").classList.add("show");
        	document.getElementById("l1").classList.add("active");
    	}else if(clickedId == "l2") {
      	document.getElementById("english").classList.add("show");
      	document.getElementById("l2").classList.add("active");
    	}else if(clickedId == "l3") {
        	document.getElementById("maths").classList.add("show");
        	document.getElementById("l3").classList.add("active");
    	}else if(clickedId == "l4") {
        	document.getElementById("science").classList.add("show");
        	document.getElementById("l4").classList.add("active");
    	}else if(clickedId == "l5") {
        	document.getElementById("social").classList.add("show");
        	document.getElementById("l5").classList.add("active");
    	}
}

const mark = new Array(5);
function tamilFunc(){	
	var tamilMark=0;
	var qus1 = document.getElementsByName("t1"); 
      if (qus1[1].checked) { // Checked property to check radio Button check or not  
		tamilMark++;
      }  
 	var qus2 = document.getElementsByName("t2"); 
      if (qus2[1].checked) { // Checked property to check radio Button check or not  
		tamilMark++;
      } 
	var qus3 = document.getElementsByName("t3"); 
      if (qus3[0].checked) { // Checked property to check radio Button check or not  
		tamilMark++;
      }
	var qus4 = document.getElementsByName("t4"); 
      if (qus4[2].checked) { // Checked property to check radio Button check or not  
		tamilMark++;
      }
	var qus5 = document.getElementsByName("t5"); 
      if (qus5[1].checked) { // Checked property to check radio Button check or not  
		tamilMark++;
      } 
	alert("Tamil mark = "+tamilMark);
	mark[0]=tamilMark;
}
function engFunc(){

	var engMark=0;
	var qus1 = document.getElementsByName("e1"); 
      if (qus1[0].checked) { // Checked property to check radio Button check or not  
		engMark++;
      }  
 	var qus2 = document.getElementsByName("e2"); 
      if (qus2[1].checked) { // Checked property to check radio Button check or not  
		engMark++;
      } 
	var qus3 = document.getElementsByName("e3"); 
      if (qus3[0].checked) { // Checked property to check radio Button check or not  
		engMark++;
      }
	var qus4 = document.getElementsByName("e4"); 
      if (qus4[1].checked) { // Checked property to check radio Button check or not  
		engMark++;
      }
	var qus5 = document.getElementsByName("e5"); 
      if (qus5[2].checked) { // Checked property to check radio Button check or not  
		engMark++;
      } 
	alert("English mark = "+engMark);
	mark[1]=engMark;
}
function mathFunc(){

	var mathMark=0;
	var qus1 = document.getElementsByName("m1"); 
      if (qus1[3].checked) { // Checked property to check radio Button check or not  
		mathMark++;
      }  
 	var qus2 = document.getElementsByName("m2"); 
      if (qus2[2].checked) { // Checked property to check radio Button check or not  
		mathMark++;
      } 
	var qus3 = document.getElementsByName("m3"); 
      if (qus3[1].checked) { // Checked property to check radio Button check or not  
		mathMark++;
      }
	var qus4 = document.getElementsByName("m4"); 
      if (qus4[1].checked) { // Checked property to check radio Button check or not  
		mathMark++;
      }
	var qus5 = document.getElementsByName("m5"); 
      if (qus5[0].checked) { // Checked property to check radio Button check or not  
		mathMark++;
      } 
	alert("Maths mark = "+mathMark);
	mark[2]=mathMark;
}
function sciFunc(){

	var sciMark=0;
	var qus1 = document.getElementsByName("s1"); 
      if (qus1[0].checked) { // Checked property to check radio Button check or not  
		sciMark++;
      }  
 	var qus2 = document.getElementsByName("s2"); 
      if (qus2[2].checked) { // Checked property to check radio Button check or not  
		sciMark++;
      } 
	var qus3 = document.getElementsByName("s3"); 
      if (qus3[1].checked) { // Checked property to check radio Button check or not  
		sciMark++;
      }
	var qus4 = document.getElementsByName("s4"); 
      if (qus4[2].checked) { // Checked property to check radio Button check or not  
		sciMark++;
      }
	var qus5 = document.getElementsByName("s5"); 
      if (qus5[3].checked) { // Checked property to check radio Button check or not  
		sciMark++;
      } 
	alert("Science mark = "+sciMark);
	mark[3]=sciMark;
}
function socialFunc(){

	var socialMark=0;
	var qus1 = document.getElementsByName("ss1"); 
      if (qus1[2].checked) { // Checked property to check radio Button check or not  
		socialMark++;
      }  
 	var qus2 = document.getElementsByName("ss2"); 
      if (qus2[3].checked) { // Checked property to check radio Button check or not  
		socialMark++;
      } 
	var qus3 = document.getElementsByName("ss3"); 
      if (qus3[0].checked) { // Checked property to check radio Button check or not  
		socialMark++;
      }
	var qus4 = document.getElementsByName("ss4"); 
      if (qus4[1].checked) { // Checked property to check radio Button check or not  
		socialMark++;
      }
	var qus5 = document.getElementsByName("ss5"); 
      if (qus5[2].checked) { // Checked property to check radio Button check or not  
		socialMark++;
      } 
	alert("Social mark = "+socialMark);
	mark[4]=socialMark;
}
function alertFunc()
{
	var displayAlert = document.getElementById("alertID");
	displayAlert.style.display='block';
	var tot = mark[0]+mark[1]+mark[2]+mark[3]+mark[4];

	document.getElementById('tamilMark').innerHTML="Tamil Mark = "+mark[0]+"";
	document.getElementById('englishMark').innerHTML="English Mark = "+mark[1]+"";
	document.getElementById('mathsMark').innerHTML="Maths Mark = "+mark[2]+"";
	document.getElementById('scienceMark').innerHTML="Science Mark = "+mark[3]+"";
	document.getElementById('socialMark').innerHTML="Social Mark = "+mark[4]+"";
	document.getElementById('totalMark').innerHTML="Total Mark = "+tot+"";

	alert("Tamil = "+mark[0]+"\nEnglish = "+mark[1]+"\nMaths = "+mark[2]+"\nScience = "+mark[3]+"\nSocial = "+mark[4]
			+"\nTotal = "+tot);
	
}
