import {render} from "../utils/utils";
import ImgUploader from "../components/img-uploader";
import ImgList from "../components/img-list";
import ImgItem from "../components/img-item";
import {Position} from "../enum/enum";
import Loader from "../components/loader";

class GalleryController {
  constructor(container, onImageSubmit = () => {}) {
    this._container = container;

    this._imgUploader = new ImgUploader({onImageSubmit: (formData) => {
      this._onImageSubmit();
      onImageSubmit(formData);
    }});

    this._loader = new Loader();

    this._imgList = new ImgList();
    this._init();
  }

  updateImages(images) {
    this._imgList.getElement().innerHTML = ``;
    images.forEach((image) => {
      render(this._imgList.getElement(), new ImgItem(image).getElement(), Position.BEFOREEND);
    });
    this.unlock();
  }

  unlock() {
    this._imgUploader.unBlock();
    this._loader.stopAnimation();
  }

  _init() {
    render(this._container, this._imgUploader.getElement(), Position.BEFOREEND);
    render(this._container, this._loader.getElement(), Position.BEFOREEND);
    render(this._container, this._imgList.getElement(), Position.BEFOREEND);
  }

  _onImageSubmit() {
    this._imgUploader.block();
    this._loader.startAnimation();
  }
}

export default GalleryController;
