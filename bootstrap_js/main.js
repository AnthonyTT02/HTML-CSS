(function () {
    'use strict';
    window.addEventsListener('load',function () {
        var forms = document.getElementsByClassName('myForm');
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                    if (form.checkValidity() === false) {
                        event.preventDeafult();
                        event.stoppropagation();
                    }
                    form.classList.add('was-validated');
                  }, false);
            });
        }, false);
})();

$('my-carousel').carousel({
    interval: 4000
})

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
