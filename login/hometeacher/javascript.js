$(document).ready(function(){
    $(".navbar-nav a").click(function(){
        $(this).tab('show');
    });
    $('.navbar-nav a').on('shown.bs.tab', function(event){
        var x = $(event.target).text();
        var y = $(event.relatedTarget).text();
        $(".act span").text(x);
        $(".prev span").text(y);
    });
});









function init() {
  
    var _inputs = document.getElementsByTagName('input');

    for (var i = 0; i < _inputs.length; i++) {

        if(!Modernizr.inputtypes[_inputs[i].type]) {
            _inputs[i].className = 'not-supported';
        }

        _inputs[i].parentNode.getElementsByClassName('result')[0].innerHTML = _inputs[i].value;

        _inputs[i].onchange = function () {
            //console.log(this.value);
            var result_node = this.parentNode.getElementsByClassName('result');
            result_node[0].innerHTML = this.value;
        }
    }
}

window.onload = init;