/*
    This script was originally part of David Millers (https://github.com/davidtmiller)
    Bootstrap theme "Freelancer" add some functionality to the contact form.

    Licensed under the Apache License 2.0. For more information take a look at the orignal
    repository unde https://github.com/IronSummitMedia/startbootstrap-freelancer.
*/

$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,

        submitError: function($form, event, errors) {
          $("<div class='alert alert-danger alert-dismissible fade in' role='alert'> <button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>×</span> </button>Please correct the form</div>")
            .appendTo( "#success" );
        },

        submitSuccess: function($form, event) {
          $("<div class='alert alert-warning alert-dismissible fade in' role='alert'> <button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>×</span> </button>Thanks for sending a request :)</div>")
            .appendTo( "#success" );
        },

        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
