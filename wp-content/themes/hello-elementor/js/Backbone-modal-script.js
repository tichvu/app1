ProductModel = Backbone.Model.extend(
	{
		validation:
		{
			name: {required:true, msg: "Please enter the product's name."},
			price: {required:true, msg: "Please enter the product's price."}
		}
	});
	
PeopleCollection = Backbone.Collection.extend(
	{
		model: ProductModel
	});

    AddProductView = Backbone.ModalView.extend(
	{
		name: "AddProductView",
		model: ProductModel,
		templateHtml:
			"<div class='modal-header'>Add a new product</div>" +
			"<form>" +
                "<table class='compact'>" +
                    "<tr><td>" +
				        "<label for='name'>Name</label>" +
                        "</td><td>" +
				        "<input type='text' id='name' />" +
                    "</td></tr>" +
                    "<tr><td>" +
				        "<label for='price'>Price</label>" +
                        "</td><td>" +
				        "<input type='text' id='price' />" +
                    "</td></tr>" +
                    "<tr><td></td><td>" +
				        "<input id='addProductButton' type='submit' value='Add product' />" +
                    "</td></tr>" +
                "</table>" +
			"</form>",
		initialize:
			function()
			{
				_.bindAll( this, "render");
				this.template = _.template( this.templateHtml);
				Backbone.Validation.bind( this,  {valid:this.hideError, invalid:this.showError});
			},
		events:
			{
				"submit form": "addProduct"
			},
		getCurrentFormValues:
			function()
			{
				return {
					name: jQuery("#name").val(),
					price: jQuery("#price").val()};
			},
		hideError:
			function(  view, attr, selector)
			{
				var $element = view.$form[attr];
				
				$element.removeClass( "error");
				$element.parent().find( ".error-message").empty();
			},
		showError:
			function( view, attr, errorMessage, selector)
			{
				var $element = view.$form[attr];
				
				$element.addClass( "error");
				var $errorMessage = $element.parent().find(".error-message");
				if( $errorMessage.length == 0)
				{
					$errorMessage = jQuery("<div class='error-message'></div>");
					$element.parent().append( $errorMessage);
				}
				
				$errorMessage.empty().append( errorMessage);
			},
		addProduct:
			function( event)
			{
				event.preventDefault();
				
				if( this.model.set( this.getCurrentFormValues()))
				{
					this.hideModal();
					//_people.add( this.model);
                    // Start - Call Woocommerce api here to add new product
                    // Create a data object with product details
                    console.log(this.model);
                    var data = {
                        name: this.model.attributes.name,
                        regular_price: this.model.attributes.price
                    };

                    //Make a POST request to the WooCommerce REST API to create the product
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
                    

				}
			},
			
		render:
			function()
			{
				jQuery(this.el).html( this.template());
				
				this.$form = {
					name: this.$("#name"),
					price: this.$("#price")}
					
				return this;
			}
	});