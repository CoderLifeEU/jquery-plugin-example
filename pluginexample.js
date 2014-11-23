(function ($) {


    $.fn.pluginexample = function (config) {
        
        console.log(config);
        
        var self = this;   
        var btnaddword = null;
        
        var defaults =
                    {
                        itemcount:0,
                        item:'<span class="word">Hello World </span>',
                        fullhtml:'<div class="word-container"></div>',
                        btnaddword:'<a class="btn btn-primary btn-add">Add</a>'

                    };
                    
        var config = $.extend(defaults, config);

        self.init = function () {
            self.html(defaults.fullhtml+defaults.btnaddword);
            self.renderwords();
            self.refreshhandlers();
        }
        
        self.renderwords = function()
        {
            var html = '';
            for(var i=0;i<defaults.itemcount;i++)
            {
                html += defaults.item;
            }
            
            self.find('.word-container').html(html);
        }


        self.renderselectItems = function()
        {
            console.log("Rendering items into dropdown");
        }

        self.refreshhandlers = function () 
        {
            btnaddword = self.find('.btn-add');
            
            btnaddword.off("click.pluginexample");
            btnaddword.on("click.pluginexample",self.addword);
        }

        self.addword = function()
        {
            $(defaults.item).insertAfter(self.find('.word').last());
        }

        return this;
    };


})(jQuery);