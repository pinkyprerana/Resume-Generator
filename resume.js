

function generateCV()
{
	//Replace value of name id to nameT1 and nameT2
	let name=document.getElementById("name").value;
	document.getElementById("nameT1").innerHTML=name;
	document.getElementById("nameT2").innerHTML=name;
	
	//Replace value of email id to emailT
	let email=document.getElementById("email").value;
	document.getElementById("emailT").innerHTML=email;
	
	//Replace value of country id to countryT
	let country=document.getElementById("country").value;
	document.getElementById("countryT").innerHTML=country;
	
	//Replace value of phone id to phoneT
	let phone=document.getElementById("phone").value;
	document.getElementById("phoneT").innerHTML=phone;
	
	//Replace value of address id to addressT
	let address=document.getElementById("address").value;
	document.getElementById("addressT").innerHTML=address;
	
	//Replace value of qualification id to qualificationT
	let qualification=document.getElementById("qualification").value;
	document.getElementById("qualificationT").innerHTML=qualification;
	
	//Replace value of skills id to skillT
	let skills=document.getElementById("skills").value;
	document.getElementById("skillsT").innerHTML=skills;
	
	//Replace value of objective id to objectiveT
	let objective=document.getElementById("objective").value;
	document.getElementById("objectiveT").innerHTML=objective;
	
	//Replace value of experience id to experienceT
	let experience=document.getElementById("experience").value;
	document.getElementById("experienceT").innerHTML=experience;

	//Code for profile image
	let file=document.getElementById("profile").files[0];
	console.log(file);
	let reader= new FileReader();
	reader.readAsDataURL(file);
	console.log(reader.result);
	//Code for profile image template
	reader.onLoadend=function()
	{
		document.getElementById("profileT").src=reader.result;
	};

	//Hiding CV form after CV generation
	document.getElementById("cv-form").style.display="none";
	document.getElementById("cv-template").style.display="block";
}

//Print CV
function printCV(){
	window.print();
}
