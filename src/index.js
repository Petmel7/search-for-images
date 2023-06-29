import * as basicLightbox from 'basiclightbox';
import "../node_modules/basiclightbox/dist/basicLightbox.min.css";

const instance = basicLightbox.create(`
    <iframe src="https://www.youtube.com/embed/E1oZhEIrer4" width="560" height="315" frameborder="0"></iframe>
`)

instance.show()