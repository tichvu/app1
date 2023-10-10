<?php
/*
Template Name: Add Product Custom
*/
get_header();

?>

<div id="primary" class="content-area">
    <main id="main" class="site-main">
        <div class="container">
            <h1>Add a New Product</h1>
            <form id="product-form" method="post">
                <label for="product-name">Product Name:</label>
                <input type="text" name="product-name" id="product-name" required><br><br>

                <label for="product-price">Product Price:</label>
                <input type="number" name="product-price" id="product-price" required><br><br>

                <input type="submit" name="submit-product" value="Add Product">
            </form>
        </div>
    </main>
</div>

<?php get_footer(); ?>