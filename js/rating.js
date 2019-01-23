! function($) {
    $.extend({
        metadata: {
            defaults: {
                type: "class",
                name: "metadata",
                cre: /({.*})/,
                single: "metadata"
            },
            setType: function(t, e) {
                this.defaults.type = t, this.defaults.name = e
            },
            get: function(elem, opts) {
                var settings = $.extend({}, this.defaults, opts);
                settings.single.length || (settings.single = "metadata");
                var data = $.data(elem, settings.single);
                if (data) return data;
                if (data = "{}", "class" == settings.type) {
                    var m = settings.cre.exec(elem.className);
                    m && (data = m[1])
                } else if ("elem" == settings.type) {
                    if (!elem.getElementsByTagName) return;
                    var e = elem.getElementsByTagName(settings.name);
                    e.length && (data = $.trim(e[0].innerHTML))
                } else if (void 0 != elem.getAttribute) {
                    var attr = elem.getAttribute(settings.name);
                    attr && (data = attr)
                }
                return data.indexOf("{") < 0 && (data = "{" + data + "}"), data = eval("(" + data + ")"), $.data(elem, settings.single, data), data
            }
        }
    }), $.fn.metadata = function(t) {
        return $.metadata.get(this[0], t)
    }
}(jQuery);
