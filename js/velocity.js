//accessing elments

//=>tab button functionality
var tabs=document.querySelectorAll(".tabs li a"),
		contents=document.querySelectorAll(".contents .content");


tabs.forEach(function(tab) {	
	tab.addEventListener('click',function() {
		tabs.forEach(function(btn) {
			btn.classList.remove("activeTab");
		})
		tab.classList.add("activeTab");
		clickOnTab(tab);
	});
})


function clickOnTab(tab) {
	contents.forEach(function(content) {
		if(content.classList[0]==tab.classList[0]) {
			content.classList.add("activeContent");
		} else {
				content.classList.remove("activeContent");	
			} 		
	});
}


//=>hamburger functionality
var menu=document.querySelector(".menu"),
		nav=document.querySelector("nav"),
		body=document.querySelector("body");


menu.addEventListener('click',function() {
	var b=menu.classList.contains("active-menu");
	if(b) {
		menu.classList.remove("active-menu");
		nav.classList.add("hidenav");
		body.classList.remove("overflow");
	} else {
		menu.classList.add("active-menu");
		nav.classList.remove("hidenav");
		body.classList.add("overflow");
	}
})


var link=document.querySelectorAll('nav a');

link.forEach(function(link){
	link.addEventListener('click',function() {
		var c=nav.classList.contains('hidenav');
		if(!c) {
			nav.classList.add('hidenav');
			body.classList.remove("overflow");
		}
		c=menu.classList.contains("active-menu");
		if(c) {
			menu.classList.remove("active-menu");
		}
	})
})