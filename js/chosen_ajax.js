(function ($) {

    // Ajax objects holder
    var ajax_xhr_object = {};

    $.fn.chosen_ajax = function (options) {
        // Call chosen
        $(this).chosen(options);

        // Loo selectors
        $.each(this, function (i, obj) {
            // Create unique key for each element
            var key = "k-" + Math.floor((Math.random() * 9999999999) + 1000000000);
            $(this).attr("data-key", key);
            ajax_xhr_object[key] = new window.XMLHttpRequest();
            //
            var select = $(this);   // Original select element
            var chosen = $(this).next('div');   // Chosen div

            // Set listener on search field
            chosen.find('.search-field input, .chosen-search input').keyup(function () {
                var old_search_term = $(this).attr("data-search");
                var search_term = $(this).val();
                if (!search_term || old_search_term == search_term)
                    return true;
                $(this).attr("data-search", search_term);
                var val = select.val();
                var val_str = val_str = JSON.stringify(val);

                ajax_xhr_object[key].abort();   // Abort previous ajax request
                var xhr = $.ajax({
                    url: options.ajax_base_url,
                    method: "POST",
                    type: "POST",
                    data: {
                        search: search_term,
                        value: val_str
                    },
                    dataType: "json",
                    success: function (data) {
                        if (data.length == 0)
                            return true;
                        // Clear options
                        select.html('');
                        chosen.find('ul.chosen-results').html('');
                        // Set new options
                        $.each(data, function (i, item) {
                            select.append('<option value="' + item[0] + '">' + item[1] + '</option>');
                        });
                        select.val(val);
                        select.trigger('chosen:updated');
                        //
                        chosen.find('.search-field input').click();
                        chosen.find('.chosen-search input').val(search_term);
                        chosen.find('.search-field input').val(search_term);
                        //
                        select.trigger('chosen:open');
                        //
                        chosen.find('.search-field input, .chosen-search input').attr("style", "width:  100%");
                    }
                });
                ajax_xhr_object[key] = xhr; // Save current ajax request object
            });
        });
    };
}(jQuery));

