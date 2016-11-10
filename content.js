var word = 'ahok';

// Make it case insensitive
$.expr[":"].contains = $.expr.createPseudo(function(arg) {
    return function( elem ) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});

// Search
var hide = function() {
  $("span:contains('"+ word +"'), a:contains('"+ word +"'), cite:contains('"+ word +"'), p:contains('"+ word +"')")
    .css("display", "none");
};

// Run every 5 secs
setInterval(hide, 5000);
