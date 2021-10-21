const tabsBtn = document.querySelectorAll(".btn");
const tabs = document.querySelectorAll(".burg");

tabsBtn.forEach(function(item) {
	item.addEventListener("click", function(){
		let currentBtn = item;
		let dataid = currentBtn.getAttribute('data-tab');
		let currentTab = document.querySelector(dataid);

		tabs.forEach(function(item){
			item.classList.remove('burg');
		});

		currentTab.classList.add('active');
		tabs.classList.add('data');
	});
});