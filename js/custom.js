// menu_toggle btn

const menuOn = document.querySelector('.menu_btn');

menuOn.addEventListener('click', function() {

  const menuFull = document.querySelector('.menu_overlay');
  const menuTitle = document.querySelector('.info_tit');
  const menuInfo = document.querySelector('.menu_info_wrap');
  const scrollHidden = document.querySelector('.body');

    menuOn.classList.toggle('active');
    menuFull.classList.toggle('active');
    menuTitle.classList.toggle('active');
    menuInfo.classList.toggle('active');
    scrollHidden.classList.toggle('active');

});

const menuLinkElems = document.querySelectorAll(
  '.menu_overlay .menu_wrap .menu_txt > ul > li > a'
);

for (let i = 0; i < menuLinkElems.length; i ++) {
  const menulinkelem = menuLinkElems[i];
  const menuFull = document.querySelector('.menu_overlay');
  const scrollHidden = document.querySelector('.body');
  menulinkelem.addEventListener('click', function() {
    menuFull.classList.toggle('active');
    menuOn.classList.toggle('active');
    scrollHidden.classList.toggle('active');
  })
}


const allText = document.querySelectorAll('.text_ani');

  window.addEventListener('scroll', function() {
    let dis = (window.scrollY - document.querySelector('.main_vis').offsetHeight) / ((document.querySelector('.scroll_box').offsetHeight - window.innerHeight) / 3);
    // console.log(window.scrollY);

    let gap = 1;
		allText.forEach(function(arr, index) {
			arr.style = '--progress:' + (Math.max(0, dis - (index * gap))) + '';
		})
	});

const topButton = document.querySelector('#topButton');
  
  topButton.addEventListener('click', function() {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  })
