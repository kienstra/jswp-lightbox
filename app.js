/********************************
 * Simple Lightbox
 * 1.4.1.8
 *
 *******************************/

var body = document.querySelector( 'body' ),
	lightboxDemo = document.getElementById( 'lightbox-demo' ),
	gallery = document.querySelectorAll( '#lightbox-demo .gallery' )[0],
	overlay = document.createElement( 'div' ),
	overlayCloseLink = document.createElement( 'a' ),
	overlayCloseText = document.createTextNode( 'X' ),
	displayOverlay,
	openLightbox,
	closeLightBox,
	addImageToOverlay;

closeLightBox = function closeLightBox( e ) {

	e.preventDefault();
	overlayCloseLink.removeEventListener( 'click', closeLightBox, false );
	overlay.querySelector( 'img' ).remove();
	overlay.remove();

};

displayOverlay = function displayOverlay() {

	overlay.setAttribute( 'id', 'overlay'  );
	overlayCloseLink.appendChild( overlayCloseText );
	overlayCloseLink.setAttribute( 'href', '#' );
	overlayCloseLink.classList.add( 'close' );
	overlayCloseLink.addEventListener( 'click', closeLightBox, false );

	overlay.appendChild( overlayCloseLink );
	body.appendChild( overlay );

};

addImageToOverlay = function addImageToOverlay( img ) {
	overlay.appendChild( img )
};

openLightbox = function openLightbox( e ) {
	if ( e.target && 'IMG' === e.target.nodeName ) {
		e.preventDefault();
		displayOverlay();
		addImageToOverlay( e.target.cloneNode() );
	}
};

gallery.addEventListener( 'click', openLightbox );
