function translate() {

    $.getJSON("text.json", function (data) {
        let searchParams = new URLSearchParams(window.location.search);
        let lang = searchParams.has('lang') ? searchParams.get('lang') : 'es';

        $(".translation").each(function () {
            let key = $(this).attr('data-trans');
            let placeholder = $(this).text();
            if (placeholder in data[key])
                $(this).text(data[key][placeholder][lang])
        });
    });
}