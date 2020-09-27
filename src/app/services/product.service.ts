import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpService } from './http.service';
import { Tags} from '../model/tags'
import { Attributes} from '../model/attributes'
import { Image, MediaResponse} from '../model/images'
import { Products } from '../model/product';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpService) { }

  getAttributes():Observable<Attributes[]>{
    return this.http.get<Attributes[]>("/products/attributes");
  }

  getTags():Observable<Tags[]>{
    return this.http.get<Tags[]>("/products/tags");
  }

  getCategories():Observable<Tags[]>{
    return this.http.get<Tags[]>("/products/categories");
  }

  uploadMedia(file:File):Observable<MediaResponse>{
    return this.http.upload<MediaResponse>("/media",file);
  }

  addProduct(prod:Products):Observable<Products>{
    return this.http.post<Products>("/products",prod);
  }

  addProductMedia(prod: Products, file: File) :Observable<Products> {
    return this.uploadMedia(file).pipe(
      mergeMap((media:MediaResponse) => {
        console.log(media);
        
        // prod.images.push(media.to());
        let img= new Image();
        img.src = media.source_url;
        prod.images.push(img);
        return this.addProduct(prod)
      })
    );
  }

  addProductVar(id:string,prod:Products):Observable<Products>{
    return this.http.post<Products>("/products/"+id+"/variations",prod);
  }

}
