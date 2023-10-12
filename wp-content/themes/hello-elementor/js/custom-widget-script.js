window.addEventListener('elementor/frontend/init', () => {
    elementorFrontend.on( 'components:init', () => { //wait for elementor pro to load
        
        console.log('Components initalised');
        //console.log(jQuery('.classABC'));
        //console.log(elementorFrontend);

        // jQuery('.classABC').parent().parent().on('click', function(){
        //     alert('Widget Clicked');
        // });
    } );

})

var myVar = '';


jQuery(document).ready(function(jQuery) {

    // elementorFrontend.hooks.addAction( 'frontend/element_ready/global', function( $scope ) {
    //     //console.log($scope);
    //     if ( $scope.data( 'shake' ) ){
    //         $scope.shake();
    //     }
    // } );

    // elementorFrontend.hooks.addAction( 'frontend/element_ready/widget', function( $scope ) {
    //     //console.log($scope);
    //     if ( $scope.data( 'shake' ) ){
    //         $scope.shake();
    //     }
    // } );

    

    
    function showCreateProductView(){
        var productCreating = new ProductModel();
        var viewModel = new AddProductView({model:productCreating});
        viewModel.render().showModal();
    }


    elementor.hooks.addAction( 'panel/open_editor/widget', function( panel, model, view ) {
        console.log('panel/open_editor/widget');    
        console.log(model);
        console.log(view);
        console.log(model.attributes.widgetType);

        //model.setSetting('product-id', 'sample text');
        //&& !view.$el[0].classList.contains('elementor-widget-empty')
        console.log(view.$el[0].classList.contains('elementor-widget-empty'));
        if(model.attributes.widgetType == 'widget_create_product' ){ 
            if(createdProduct.get('id') != 0 && model.getSetting('product-id') == ''){
                model.setSetting('product-id', createdProduct.get('id'));
            } 
        }

    } );

    elementor.hooks.addAction( 'panel/open_editor/widget/widget_create_product', function( panel, model, view ) {
        console.log('hook panel/open_editor/widget/widget_create_product');
        // console.log(panel);
        // console.log(model);
        // console.log(view);
        // console.log('productCreating');
        // console.log(productCreating);
        // console.log('createdProduct from hooks');
        // console.log(createdProduct);

        // if(createdProduct.get('id') != 0){
        //     console.log('Product created, now show it');
        //     console.log(createdProduct.attributes.attributes.name);
        //     console.log(createdProduct.attributes.attributes.price);
        //     view.$el.html("\
        //         <div class='product'>\
        //             <h3>" + createdProduct.attributes.attributes.name + "</h3>\
        //             <p>" + createdProduct.attributes.attributes.price + "</p>\
        //         </div>\
        //     ");
        // } else{
        //     console.log('Product has not created, now show model popup to create a new product');
        //     var productCreating = new ProductModel();
        //     var viewModel = new AddProductView({model:productCreating, view:view});
        //     viewModel.render().showModal();
        // }

        
        // alert( 'Action 2' );
        // console.log(panel);
        // console.log(model);
        // console.log(view);
        // window.addEventListener('elementor/frontend/init', () => {
        //     elementorFrontend.on( 'components:init', () => { //wait for elementor pro to load
        //         console.log('Components initalised');
        //     } );
        // })
        // var $element = view.$el.find( 'elementor-widget-widget_create_product' );
        
        // if ( $element.length ) {
        //     $element.click( function() {
        //     alert( 'Some Message' );
        //     } );
        // }
     } );

    elementorFrontend.hooks.addAction( 'frontend/element_ready/widget', function( $scope ) {
        console.log('createdProduct from elementorFrontend hooks');
        //console.log($scope);

        if($scope[0].classList.contains('elementor-widget-widget_create_product')){ 
            console.log(createdProduct);
            console.log(createdProduct.get('name'));
            if(createdProduct.get('id') != 0){
                if(createdProduct.attributes.attributes.dragged == 1){
                    showCreateProductView();
                } else{
                    $scope.html("\
                    <div class='product'>\
                        <h3>" + 'Product Name: ' + createdProduct.attributes.attributes.name + "</h3>\
                        <h3>" + 'Product Price: $' + createdProduct.attributes.attributes.price + "</h3>\
                    </div>\
                    ");
                    //createdProduct.set('dragged', 1);
                    createdProduct.attributes.attributes.dragged = 1;
                    console.log('after set dragged')
                    console.log(createdProduct);
                }
            } else{
                console.log('Product has not created, now show model popup to create a new product');
                showCreateProductView();
            }
        }
        
    } );
        

    

});

