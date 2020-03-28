(function (app) {
    function Footer() {}

    Footer.prototype.init = function () {
        this.storeDomElements();
        this.addListeners();
    }

    Footer.prototype.storeDomElements = function () {
        this.iconLinks = document.getElementsByClassName('footer-social__icon-link');
        this.textLinks = document.getElementsByClassName('footer-social__text-link');
    }

    Footer.prototype.addListeners = function () {
        var self = this;

        [].forEach.call(this.iconLinks, function (iconLink) {
            iconLink.addEventListener('mouseenter', self.onLinkHover.bind(self));

            iconLink.addEventListener('mouseleave', self.onLinkBlur.bind(self));
        });

        [].forEach.call(this.textLinks, function (textLink) {
            textLink.addEventListener('mouseenter', self.onTextHover.bind(self));

            textLink.addEventListener('mouseleave', self.onTextBlur.bind(self));
        });
    }

    Footer.prototype.onLinkHover = function (event) {
        var icon = event.target.parentElement;

        icon.classList.add('hovered');
        icon.nextSibling.classList.add('hovered');
    }

    Footer.prototype.onLinkBlur = function (event) {
        var icon = event.target.parentElement;

        icon.classList.remove('hovered');
        icon.nextSibling.classList.remove('hovered');
    }

    Footer.prototype.onTextHover = function () {
        var text = event.target;

        text.classList.add('hovered');
        text.previousSibling.classList.add('hovered');
    }

    Footer.prototype.onTextBlur = function () {
        var text = event.target;

        text.classList.remove('hovered');
        text.previousSibling.classList.remove('hovered');
    }

    app.footer = new Footer();
})(app);
