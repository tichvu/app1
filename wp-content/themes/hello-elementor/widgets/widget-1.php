<?php
class Elementor_Test_Widget extends \Elementor\Widget_Base {

	public function get_name() {
		return 'widget_create_product';
	}

	public function get_title() {
		return esc_html__( 'Create product', 'textdomain' );
	}

	public function get_icon() {
		return 'eicon-code classABC';
	}

	public function get_custom_help_url() {
		return 'https://go.elementor.com/widget-name';
	}

	public function get_categories() {
		return [ 'general' ];
	}

	public function get_keywords() {
		return [ 'keyword', 'keyword' ];
	}

    protected function register_controls() {

		// $this->start_controls_section(
		// 	'content_section',
		// 	[
		// 		'label' => esc_html__( 'Content', 'textdomain' ),
		// 		'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
		// 	]
		// );

        // $args = array(
        //     'post_type'      => 'product',
        //     'posts_per_page' => 10
        // );

        // $products = array();
        // $loop = new WP_Query( $args );
        // while ( $loop->have_posts() ) : $loop->the_post();
        //     global $product;
        //     $id = $product->get_id();
        //     $products[$id] = get_the_title();
        // endwhile;

        // wp_reset_query();

		// $this->add_control(
		// 	'title',
		// 	[
		// 		'type' => \Elementor\Controls_Manager::TEXT,
		// 		'label' => esc_html__( 'Title', 'textdomain' ),
		// 		'placeholder' => esc_html__( 'Enter your title', 'textdomain' ),
		// 	]
		// );

        // $this->add_control(
		// 	'product',
		// 	[
		// 		'type' => \Elementor\Controls_Manager::SELECT,
		// 		'label' => esc_html__( 'Choose product', 'textdomain' ),
		// 		'options' => $products,
		// 		'default' => 'no',
		// 	]
		// );


        
		// $this->end_controls_section();

	}
    // protected function render() {
	// 	// $settings = $this->get_settings_for_display();
	// 	// echo '<h3>' . $settings['title'] . '</h3>';
    //     // echo '<h3>' . $settings['product'] . '</h3>';
    //     // $product = wc_get_product($settings['product']);
		
		
        
	// }

	// PHP render
	protected function render() {
        // Render the widget content here.
        $settings = $this->get_settings_for_display();

        // Output the button that triggers the popup.
        echo '<button id="custom-widget-popup-button">Open Popup</button>';

        // Output JavaScript to trigger the popup immediately.
        echo '<script>
            jQuery(document).ready(function($) {
				//var model = new ProductModel();
				//var view = new AddProductView( {model:model});
				//view.render().showModal({]});

                //$(\'#custom-widget-popup-button\').on(\'click\', function() {
				//	alert(\'hello there\');
				//});

			});
        </script>';
    }

	// JS render
	public function _content_template() {
        // Define the content template for the widget (optional).
    }
	
}
