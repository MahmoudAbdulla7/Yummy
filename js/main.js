import { Area } from "./area.js";
import { Categories } from "./categories.js";
import { Contact } from "./contact.js";
import { Home } from "./home.js";
import { Ingredients } from "./Ingredients.js";
import { Search } from "./search.js";






let home =new Home;
$('#search').click(()=>{
    let search =new Search;
})
$('#categories').click(()=>{
    let categories =new Categories;
})
$('#area').click(()=>{
    let area =new Area;
})
$('#ingredients').click(()=>{
    let ingredients =new Ingredients;
})
$('#contact').click(()=>{
    let contact =new Contact;
})










// -------------Nav-----------------
let leftNavWidth =$('.left').outerWidth();
$('.hide').click(()=>{
    
    if ($('.sideNav').css('left')=='0px') {
        $('.sideNav').animate({left:`-${leftNavWidth}`},500 ,()=>{
            $('.toSlide').hide(1000);
        });
        $('.hide').addClass('d-none');
        $('.show').removeClass('d-none');
        
    }
})
$('.show').click(()=>{
    if ($('.sideNav').css('left')!=`0px`) {
        $('.sideNav').animate({left:`-0`},500);
        $('.show').addClass('d-none');
        $('.hide').removeClass('d-none');
        $('.toSlide').slideDown(500);
    }
})