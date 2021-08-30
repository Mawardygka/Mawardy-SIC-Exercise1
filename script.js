const textElement = ['freelancer', 'Web Developer', 'Fotografer', 'Travel Guide'];
let count = 0;
let txtIndex= 0;
let currentTxt = '';
let words = '';

(function ngetik(){

if(count == textElement.length){
    count = 0;
}
currentTxt = textElement[count];

words = currentTxt.slice(0, ++txtIndex);
document.querySelector('.efek-ngetik').textContent = words;

if(words.length == currentTxt.length){
    count++;
    txtIndex = 0;
}

setTimeout(ngetik, 500);

})();
//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
    tombolMenu.click(function () {
        menu.toggle();
    });
    menu.click(function () {
        menu.toggle();
    });
}

$(document).ready(function () {
    var width = $(window).width();
    if (width < 990) {
        klikMenu();
    }
})

//check lebar
$(window).resize(function () {
    var width = $(window).width();
    if (width > 989) {
        menu.css("display", "block");
        //display:block
    } else {
        menu.css("display", "none");
    }
    klikMenu();
});

//efek scroll 
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("nav").addClass("putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        } else {
            $("nav").removeClass("putih");
            $("nav img.hitam").hide();
            $("nav img.putih").show();
        }
    })
});