# Chosen Search Ajax
Chosen Search Ajax is a plugin built on the top of [Chosen v1.8.7](https://harvesthq.github.io/chosen/ "Chosen v1.8.7") plugin to add search by ajax in the select options. 

Please refer to [https://harvesthq.github.io/chosen/](https://harvesthq.github.io/chosen/ "https://harvesthq.github.io/chosen/") for more information about chosen and it's options.


[Demo](http://asamirdemos.codeagroup.net/chosen-search-ajax-plugin "Demo")

## Usage

### Import these files

    <!-- CSS -->
    <link rel="stylesheet" href="css/chosen.min.css">
    
    <!-- JS -->
    <script src="js/jquery.min.js" type="text/javascript"></script>
    <script src="js/chosen.jquery.min.js" type="text/javascript"></script>
    <script src="js/chosen_ajax.js" type="text/javascript"></script>

    
### To use it call [ chosen\_ajax ] function and you can use any of chosen options. But it is mandatory to set [ ajax\_base\_url ] which is the server url.

    $(".chosen-select").chosen_ajax({
	    allow_single_deselect: true, // Normal chosen option
	    // Ajax options
	    ajax_base_url: "http://asamir.local/chosen-search-ajax-plugin/server.php",  // Mandatory
	    ajax_method: "POST",                            // Default GET
	    ajax_data: {type: 'A', extra: 123456789},       // To set extra data + {search field}
	    ajax_min_chars: 2                               // Minimum characters to send ajax request
    });

### After finishing the search e.x.
    
    select id, name from customers where countries like %{$_GET[search]}%
    
    

### The server must return a JSON array as a response in this structure

    [
	    [value, label],
	    [value, label],
	    [value, label],
    ] 
    e.x.
    [
	    ['EG', 'Egypt'],
	    ['US', 'United Stated'],
	    ['UK', 'United Kingdom'],
    ]   


## Author

**Ahmed Samir**

**Contacts:** [eng.ahmed.samir.fci@gmail.com](mailto:eng.ahmed.samir.fci@gmail.com) | [Linkedin](https://www.linkedin.com/in/ahmed-samir-58250284/)
    