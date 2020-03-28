(function (app) {
    function bootstrap() {
        app.header.init();
        app.footer.init();
    }

    window.onload = bootstrap;
})(app);
