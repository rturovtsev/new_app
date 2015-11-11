$(document).ready(function() {
    addTooltip();
    addCustomScrollYX();
    addCustomScrollY();
    addCustomScrollX();
    addDatapicker();
    addDatapickerYear();
});







/* ======================FUNCTIONS======================== */






//включение подсказок
function addTooltip() {
    $('[data-toggle="tooltip"]').tooltip();
}


//Подключение стилизованного скролла
function addCustomScrollYX() {
    if ( $('.custom-scroll_yx').length ) {
        $('.custom-scroll_yx').mCustomScrollbar({
            axis:"yx",
            theme:"dark",
            scrollInertia:100,
            advanced:{
                updateOnContentResize: true
            }
        });
    }
}
function addCustomScrollY() {
    if ( $('.custom-scroll_y').length ) {
        $('.custom-scroll_y').mCustomScrollbar({
            axis:"y",
            theme:"dark",
            scrollInertia:100,
            advanced:{
                updateOnContentResize: true
            }
        });
    }
}
function addCustomScrollX() {
    if ( $('.custom-scroll_x').length ) {
        $('.custom-scroll_x').mCustomScrollbar({
            axis:"x",
            theme:"dark",
            scrollInertia:100,
            advanced:{
                updateOnContentResize: true
            }
        });
    }
}


//стилизованный календарь обычный
function addDatapicker() {
    if ( $('.datepicker').length ) {
        $('.datepicker').datepicker({
            format: 'mm.dd.yyyy',
            autoclose: true,
            language: "ru",
            todayHighlight: true
        });
    }
}
//только год
function addDatapickerYear() {
    if ( $('.datepicker-year').length ) {
        $('.datepicker-year').datepicker({
            format: 'yyyy',
            viewMode: "years",
            minViewMode: "years",
            autoclose: true,
            language: "ru"
        });
    }
}