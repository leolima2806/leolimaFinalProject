document.addEventListener('DOMContentLoaded', function () {

    const homeButton = document.querySelector('#home-button');
    const htmlButton = document.querySelector('#html-button');
    const cssButton = document.querySelector('#css-button');
    const jsButton = document.querySelector('#js-button');

    function redirectTo(url) {
        window.location.href = url;
    }

    homeButton.addEventListener('click', function (event) {
        event.preventDefault();
        redirectTo('index.html');
    });

    htmlButton.addEventListener('click', function (event) {
        event.preventDefault();
        redirectTo('html_cheat_sheet.html');
    });

    cssButton.addEventListener('click', function (event) {
        event.preventDefault();
        redirectTo('css_cheat_sheet.html');
    });

    jsButton.addEventListener('click', function (event) {
        event.preventDefault();
        redirectTo('javascript_cheat_sheet.html');
    });
});
