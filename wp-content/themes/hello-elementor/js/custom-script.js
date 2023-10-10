jQuery(document).ready(function(jQuery) {
    jQuery('#product-form').on('submit', function(event) {
        event.preventDefault();

        // Get user inputs
        var productName = jQuery('#product-name').val();
        var productPrice = jQuery('#product-price').val();

        // Create a data object with product details
        var data = {
            name: productName,
            regular_price: productPrice
        };

        // Make a POST request to the WooCommerce REST API to create the product
        jQuery.ajax({
            url: 'https://localhost/app1/wp-json/wc/v3/products',
            method: 'POST',
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', 'Basic Y2tfMmJjODJkMTRhZGRlZjUwYTUzYzFlOTllZjEzYmUwNjVjYTEyZTM5ZDpjc182OTRiZmExZTAyNmEyYWUzOTljNDk1MTkzYjU0MzVjNWMwYWQ3OWVh'); // Replace with your API key and secret
            },
            data: data,
            success: function(response) {
                alert('Product created successfully!');
                // You can optionally redirect the user or perform other actions after product creation.
            },
            error: function(error) {
                console.log('Error:', error);
                alert('Product creation failed.');
            }
        });
    });
});
