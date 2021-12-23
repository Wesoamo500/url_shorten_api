const shorten = document.querySelector(".input-field button");
const input = document.querySelector(".input-field input");
let list = document.getElementById('list');

shorten.addEventListener('click', (e)=>{
	if(input.value==""){
		document.getElementById('prompt').style.visibility="visible";
		document.getElementById('prompt').style.color="red";
		input.style.border='1px solid red';
	}else{
		add(input.value);
	}
	
})

async function add(url){
	const tes = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
	const me = await tes.json();
	list.innerHTML+=`<li><div>${me.result.original_link}</div><div id='res'><a href="${me.result.full_short_link}" id="short-url">${me.result.full_short_link}</a><button class ="short-btn">Copy!</button></div></li>`
	const btn = document.querySelector('#list button');
	btn.addEventListener('click',function(){
		navigator.clipboard.writeText(me.result.full_short_link);
		btn.style.backgroundColor='hsl(257, 27%, 26%)';
		btn.style.color='white';
		btn.innerHTML='Copied!';
	});
	};


	

function disp(){
	document.querySelector('.image img').style.display='none';
	document.getElementById('container1').style.display='block';
}