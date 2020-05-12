function translate() {
    $.getJSON("text.json", function (data) {
        let searchParams = new URLSearchParams(window.location.search);
        let lang = searchParams.has('lang') ? searchParams.get('lang') : 'es';

        $(".translation").each(function () {
            let key = $(this).attr('data-trans');
            let placeholder = $(this).text();
            if (placeholder in data[key])
                $(this).html(data[key][placeholder][lang])
        });
    });
}


function goto(e) {

    $(".nav-item.active").toggleClass("active");
    $('#' + e.id).addClass('active');

    let url = e.id + ".html";
    $("#content").load(url);
    setTimeout(function () {
        translate();
    }, 150);

}