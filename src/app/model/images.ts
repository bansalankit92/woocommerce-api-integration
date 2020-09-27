export class Image {

  id: number;
  src: string;
  name: string;
  alt: string;

}

export class MediaResponse{
    id: number;
    source_url: string;

    to():Image{
      let img = new Image();
      img.id = this.id;
      img.src = this.source_url;
      return img;  
    }
}
