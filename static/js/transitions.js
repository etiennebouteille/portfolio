document.addEventListener("DOMContentLoaded", function() {
    Barba.Pjax.start();

    var FadeTransition = Barba.BaseTransition.extend({
        start: function () {
            Promise
                .all([this.newContainerLoading, this.fadeOut()])
                .then(this.fadeIn.bind(this));
        },
    
        fadeOut: function () {
            var oldWrap = this.oldContainer;
            oldWrap.classList.toggle('fadeOut');
    
            return new Promise(function (resolve, reject) {
                window.setTimeout(function () {
                    resolve();
                }, 700);
            });
        },
        fadeIn: function () {
            var newWrap = this.newContainer;
            newWrap.classList.toggle('fadeIn');
            this.done();
        }
    });
    
    Barba.Pjax.getTransition = function () {
        return FadeTransition;
    };
});