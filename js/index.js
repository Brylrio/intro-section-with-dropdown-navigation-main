const features = document.querySelector('#features');
const company = document.querySelector('#company');
const drop_features = document.querySelector('#dropdown-features');
const drop_company = document.querySelector('#dropdown-company');
const  arrow_features_up = document.querySelector('.arrow-features-up');
const  arrow_features_down = document.querySelector('.arrow-features-down');
const  arrow_company_up = document.querySelector('.arrow-company-up');
const  arrow_company_down = document.querySelector('.arrow-company-down');
const menu = document.querySelector('#menu');
const close_btn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar-container');
const logo = document.querySelector('#logo');
const body = document.querySelector('body');


features.addEventListener('click', () => {
   drop_features.classList.toggle('active');
   if(drop_features.classList.contains('active')) {
      arrow_features_up.style.display = 'block';
      arrow_features_down.style.display = 'none';
   }else {
      arrow_features_up.style.display = 'none';
      arrow_features_down.style.display = 'block';
   }
 
})

company.addEventListener('click', () => {
   drop_company.classList.toggle('active');
   if(drop_company.classList.contains('active')) {
      arrow_company_up.style.display = 'block';
      arrow_company_down.style.display = 'none';
   }else {
      arrow_company_up.style.display = 'none';
      arrow_company_down.style.display = 'block';
   }
})

menu.addEventListener("click", () => {
   sidebar.classList.add('active')
   sidebar.style.zIndex = '999'
   
   
})
close_btn.addEventListener("click", () => {
   sidebar.classList.remove('active')
   sidebar.style.zIndex = '999'
   
   
})

const features_mobile = document.querySelector('#features-mobile');
const company_mobile = document.querySelector('#company-mobile');
const  arrow_features_up_mobile = document.querySelector('.arrow-features-up-mobile');
const  arrow_features_down_mobile = document.querySelector('.arrow-features-down-mobile');

const  arrow_company_up_mobile = document.querySelector('.arrow-company-up-mobile');
const  arrow_company_down_mobile = document.querySelector('.arrow-company-down-mobile');
const mobile_features_dropdown = document.querySelector('#mobile-features-dropdown');
const mobile_company_dropdown = document.querySelector('#mobile-company-dropdown');



features_mobile.onclick = () => {
   mobile_features_dropdown.classList.toggle('active')
   if(mobile_features_dropdown.classList.contains('active')) {
      arrow_features_down_mobile.style.display = 'none'
      arrow_features_up_mobile.style.display = 'block'
   }
   else {
      arrow_features_down_mobile.style.display = 'block'
      arrow_features_up_mobile.style.display = 'none'
   }
   
}

company_mobile.onclick = () => {
   mobile_company_dropdown.classList.toggle('active')
   if(mobile_company_dropdown.classList.contains('active')) {
      arrow_company_down_mobile.style.display = 'none'
      arrow_company_up_mobile.style.display = 'block'
   }
   else {
      arrow_company_down_mobile.style.display = 'block'
      arrow_company_up_mobile.style.display = 'none'
   }
}
