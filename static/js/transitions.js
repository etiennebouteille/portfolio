document.addEventListener("DOMContentLoaded", function() {
    //Init barb
    Barba.Pjax.start();
    Barba.Prefetch.init();


    //Barba animations work by extending the default animation
    var FadeTransition = Barba.BaseTransition.extend({
        start: function () {
            Promise
                //Which animation to do on unload is set here
                .all([this.newContainerLoading, this.fadeOut()])
                //and on loading the next page
                .then(this.fadeIn.bind(this));
        },
    
        //the actual load animation is this one
        fadeOut: function () {
            //get dom element
            var oldWrap = this.oldContainer;
            //add a class to it, then the actual animation is in the css
            //oldWrap.classList.toggle('fadeOut');
            document.getElementById("content").classList.toggle('fadeOut');

            return new Promise(function (resolve, reject) {
                window.setTimeout(function () {
                    resolve();
                }, 700);
            });
        },
        //unload animation
        fadeIn: function () {
            var newWrap = this.newContainer;
            //newWrap.classList.toggle('fadeIn');
            document.getElementById("content").classList.toggle('fadeIn');
            this.done();
        }
    });

    //trying to make an invisible animation
    var QuickFade = Barba.BaseTransition.extend({
       start: function () {
           Promise
               .all([this.newContainerLoading, this.qFadeOut()])
               .then(this.qFadeIn.bind(this));
       },
    
       qFadeOut: function () {
           var oldWrap = this.oldContainer;
           oldWrap.classList.toggle('qFadeOut');
    
           return new Promise(function (resolve, reject) {
               window.setTimeout(function () {
                   resolve();
               }, 700);
           });
       },
       qFadeIn: function () {
           var newWrap = this.newContainer;
           newWrap.classList.toggle('qFadeIn');
           this.done();
       },

       isMenu: function (){
           var oldWrap = this.oldContainer;

           return false;
       }
       });


    //Tell barbajs to use the new transtion
    Barba.Pjax.getTransition = function () {
        console.log("hello");
        return FadeTransition;
    };
});