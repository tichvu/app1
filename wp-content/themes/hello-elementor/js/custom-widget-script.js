window.addEventListener('elementor/frontend/init', () => {
    elementorFrontend.on( 'components:init', () => { //wait for elementor pro to load
        
        console.log('Components initalised');
        console.log(jQuery('.classABC'));
        //console.log(elementorFrontend);

        jQuery('.classABC').parent().parent().on('click', function(){
            alert('Widget Clicked');
        });
    } );
})


jQuery(document).ready(function(jQuery) {

       elementorFrontend.hooks.addAction( 'frontend/element_ready/global', function( $scope ) {
        //console.log($scope);
        if ( $scope.data( 'shake' ) ){
            $scope.shake();
        }
    } );

    elementorFrontend.hooks.addAction( 'frontend/element_ready/widget', function( $scope ) {
        //console.log($scope);
        if ( $scope.data( 'shake' ) ){
            $scope.shake();
        }
    } );

    
    
    jQuery('.classABC').parent().parent().on('click', function(){
        console.log('ABC');
    });

    
   
    // Handle the button click event to open the popup.
    jQuery('#custom-widget-popup-button').on('click', function() {
        alert('button clicked');
            
    });


    elementor.hooks.addAction( 'panel/open_editor/widget', function( panel, model, view ) {
    //     alert( 'Action 1' );
    //     console.log(view.$el);
    //     console.log(view.$el[0].classList);

    //     // if ( 'section' !== model.elType && 'column' !== model.elType ) {
    //     //     return;
    //     // }elementor-widget-widget_create_product"

    //    var $element = view.$el[0].classList.contains( 'elementor-widget-widget_create_product' );
    //    console.log($element);
    //    if ( $element ) {

    //        // Create the modal view
    //        var model = new ProductModel();
    //        var view = new AddProductView( {model:model});
    //        view.render().showModal({
                  
    //            });
    //    }
    } );

    elementor.hooks.addAction( 'panel/open_editor/widget/widget_create_product', function( panel, model, view ) {
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
        
});

