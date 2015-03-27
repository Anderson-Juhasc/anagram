(function ($, window, document, jarallax){
    "use strict";

    var pluginName = "balloons"
      , defaults = { };

    function Balloons(element, options){
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this.initialize();
    }

    $.extend(Balloons.prototype, {
        initialize : function(){
            this.Animate();
        }
        , Animate : function(){

            var marginTop = parseInt($(this.element).css('margin-top'));

            jarallax.addAnimation(this.element, [
                { progress : '0%' ,  marginTop : (marginTop-0)+"px"   }
              , { progress : '25%',  marginTop : (marginTop-430)+"px" }
              , { progress : '75%',  marginTop : (marginTop+430)+"px" }
              , { progress : '100%', marginTop : (marginTop-230)+"px" }
            ]);
        }
    });

    $.fn[pluginName] = function(options){
        return this.each(function(){
            new Balloons(this, options);
        });
    };

})(jQuery, window, document, new Jarallax());
