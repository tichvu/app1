<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'app1' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '}a{FTaNCb.51IkP_*NunUmiN`j+5ryvb^YA$FUXFh@{l}tMKhsrH46GuZC({:&24' );
define( 'SECURE_AUTH_KEY',  '7)!!XY-:zP)7ID^PNrp2gYb3qikjud0Cb%(?0ItQf[ahUGq:vB.DS)]v?3<^5@g]' );
define( 'LOGGED_IN_KEY',    '@:Xy6qR;s<M_f8^KWEAm%#MN5o1bn)#5J|0ex2wT(Y.$b4QkeCeQG1%QBRa,i>!|' );
define( 'NONCE_KEY',        'fAu([s>VgA6H{wd#:wcrjd;f/?W6hqH:z~RQ6P0<`n@jjk2F#o^n=-)U+C_,NniB' );
define( 'AUTH_SALT',        'IovySvb+A]E+Ry[D~{v;9]ykyw8S{<`^`[)%1ev-g^@`WbE[I*KC1VE9w)?ha_Qq' );
define( 'SECURE_AUTH_SALT', 'V<iTbVI[%Kp%?p&rYu!94mOs&Mx 3*mX4B@cc=%*X^0lc#y5a{QG!*^}trE 3)Ai' );
define( 'LOGGED_IN_SALT',   '_ P12|BXCmxiQ!7Kra#auaLRQ|D%4RNB!ZmgiqK@<gqZ5{[Y#K]K?qV).duDGAG/' );
define( 'NONCE_SALT',       ':}>%U^2I`Qh1PhrrF=~JbQFL-Bu&I9hTQ+LY`^ZQ%)&P*iSvr9PRN`E1D#3uwC7o' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
