const { functionsIn } = require("lodash");

// jquery smooth scroll
$('.navbar a').on('click', function(e) {
    if(this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body')
            .animate({
                scrollTop: $(hash).offset().top
            }, 800);
    }
});
var a;
function showletter(){
    if(a==1)
    {
        document.getElementById('letterdiv').style.opacity='1';
        return a=0;
    }
    else{
        document.getElementById('letterdiv').style.opacity='0';
        return a=1;
    }
}

