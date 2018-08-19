// function Loadjson( file,callback)
// {
// 	var xhr = new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json");
// 	xhr.open("GET",file,true);
// 	xhr.onreadystatechange = function()
// 	{
// 		if(xhr.readyState === 4 && xhr.status == "200")
// 		{
// 			callback(xhr.responseText);
// 		}
// 	}; 
// xhr.send(null);
// }
// // Loadjson("data.json",function(text) {
// // 	var data = JSON.parse(text);
// // 	console.log(data);
// // 	basic(data.details);
// // 	careerinfo(data.careerobjectives);
// //     qual(data.education);
// //     tech(data.techskill);
// //     ach(data.achivements)
// // })
function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else
			{
				reject(new Error('error'));
			}
		})
	})
}
var newfile = loadjson("data.json");
newfile.then(data=>{
	console.log(data);
 	basic(data.details);
 	careerinfo(data.careerobjectives);
     qual(data.education);
     tech(data.techskill);
     ach(data.achivements)
})
var left=document.querySelector(".left");
function basic(det){
	var img = document.createElement("img");
	img.src = det.image;
	left.appendChild(img);
	var name1 = document.createElement("h3");
	name1.textContent = det.name;
	left.appendChild(name1);
	var cn = document.createElement("h4");
	cn.textContent = det.contact;
	left.appendChild(cn);
	var email = document.createElement("a");
	email.href = "mailto:tejakeepsmile@gmail.com";
	email.textContent = det.email;
	left.appendChild(email);
	var add = document.createElement("h2");
	add.textContent = "address";
	left.appendChild(add);
	var hrline = document.createElement("hr");
	left.appendChild(hrline);
	var addr = document.createElement("h3");
	addr.textContent = det.address;
	left.appendChild(addr);
}
var right=document.querySelector(".right");
function careerinfo(info){
	var inf = document.createElement("h3");
	inf.textContent = info.info1;
	right.appendChild(inf);
	var que = document.createElement("h3");
	que.textContent = info.qualification;
	right.appendChild(que);
}
function qual(q){
	var add1 = document.createElement("h4");
	add1.textContent = "educational qualification";
	right.appendChild(add1);

	var hrline = document.createElement("hr");
	right.appendChild(hrline);

	var table1 = document.createElement("table");
	table1.border = "2";
	right.appendChild(table1);

	tabledata="";
	for(i=0;i<q.length;i++)
	{
		tabledata+="<tr><td>"+q[i].qualification+"</td><td>"+q[i].institution+"</td><td>"+q[i].year+"</td><td>"+q[i].percentage+"</td></tr>";
	}
	table1.innerHTML = tabledata;
}
function tech(te){
	var tec = document.createElement("h4");
	tec.textContent = "technical skills";
	right.appendChild(tec);

	var hrline = document.createElement("hr");
	right.appendChild(hrline);

	for(i=0;i<te.length;i++)
	{
		var s =document.createElement("h3");
		s.textContent = te[i].title;
		right.appendChild(s);
	var ul = document.createElement("ul");
	var li = document.createElement("li");
	li.textContent = te[i].info;
	ul.appendChild(li);
	right.appendChild(ul);
	}
}
function ach(ac)
{
	var a = document.createElement("h3");
	a.textContent = " Achivements";
	right.appendChild(a);

	var hrline = document.createElement("hr");
	right.appendChild(hrline);

	for(i=0;i<ac.length;i++)
	{
			var ah =document.createElement("h4");
			ah.textContent = ac[i].title;
			right.appendChild(ah);
	}
}	
function openpage(){
	window.open("resume.html","_self",true)
}