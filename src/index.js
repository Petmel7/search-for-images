import * as basicLightbox from 'basiclightbox';
import "../node_modules/basiclightbox/dist/basicLightbox.min.css";

// const instance = basicLightbox.create(`
// 	<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
// `)

// instance.show();

const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`)

instance.show()