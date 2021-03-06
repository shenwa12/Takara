/*!
 * Jigsaw
 * 
 * Developed by Ourai Lin, http://ourai.ws/
 * 
 * Copyright (c) 2013 JavaScript Revolution
 */
define(function( require, exports, module ) {

var $ = require( "./core" );

module.exports = $.mix( $,
		// 工具
		require( "./util/object" ),
		require( "./util/array" ),
		require( "./util/string" )
	);

});
