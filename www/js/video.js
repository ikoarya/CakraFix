/*
* FlowType.JS v1.1
* Copyright 2013-2014, Simple Focus http://simplefocus.com/
*
* FlowType.JS by Simple Focus (http://simplefocus.com/)
* is licensed under the MIT License. Read a copy of the
* license in the LICENSE.txt file or at
* http://choosealicense.com/licenses/mit
*
* Thanks to Giovanni Difeterici (http://www.gdifeterici.com/)
*/

(function($) {
   $.fn.ukuran_video = function(options) {

// Establish default settings/variables
// ====================================
      var settings = $.extend({
         maximum   : 9999,
         minimum   : 1,
         maxVideo   : 689,
         minVideo   : 180,
         VideoRatio : 10
      }, options),

// Do the magic math
// =================
      changes = function(el) {
         var $el = $(el),
            elh = $el.height(),
            height = elh > settings.maximum ? settings.maximum : elh < settings.minimum ? settings.minimum : elh,
            VideoBase = height / settings.VideoRatio,
            VideoSize = VideoBase > settings.maxVideo ? settings.maxVideo : VideoBase < settings.minVideo ? settings.minVideo : VideoBase;
         $('#imit').css('height', VideoSize + 'px');
         //alert(elh + ' ' + VideoSize);
         //alert(elh + '-' + $(el));
      };
// Make the magic visible
// ======================
      return this.each(function() {
      // Context for resize callback
         var that = this;
      // Make changes upon resize
         $(window).resize(function(){changes(that);});
      // Set changes on load
         changes(this);
      });
   };
}(jQuery));