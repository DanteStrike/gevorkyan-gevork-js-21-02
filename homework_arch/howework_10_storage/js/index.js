import Api from "./server/api";
import ImgBBServerConfig from "./configs/img-b-b-server-config";
import GalleryController from "./controllers/gallery-controller";
import {encodeToBase64} from "./utils/utils";
import imagesStoreConfig from "./configs/images-store-config";
import ArrStore from "./storage/arr-store";


const imgBBAPI = new Api(ImgBBServerConfig);
const imagesStore = new ArrStore(imagesStoreConfig);

const onImageSubmit = async (formData) => {
  const imageFile = formData.get(`image`);

  const imgBase64 = await encodeToBase64(imageFile);
  formData.set(`image`, imgBase64.replace(/^.*,/, ``));

  const uploadedData = await imgBBAPI.uploadImg(formData);
  if (imagesStore.data.every((image) => image.id !== uploadedData.id)) {
    imagesStore.push(uploadedData);
    galleryController.updateImages(imagesStore.data);

    return;
  }

  alert(`Image in gallery already!!!`);
  galleryController.unlock();
};

const galleryController = new GalleryController(document.querySelector(`#root`), onImageSubmit);
galleryController.updateImages(imagesStore.data);
