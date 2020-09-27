import { Component, OnInit } from '@angular/core';
import { Tags } from 'src/app/model/tags';
import { Products } from 'src/app/model/product';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  tags:Tags[]=[];
  selectedTags:Tags[] =[];

  categories: Tags[]=[];
  selectedCat: Tags[] =[];

  product:Products;
link;
savedProd = false;

  constructor(private prod:ProductService) { 
   

  }

  ngOnInit(): void {
    this.getTags();
    this.getCategories();
    this.product = new Products();
  }
  getCategories() {
    this.prod.getCategories().subscribe(res=>{
      this.categories = res;
    })
  }
  getTags() {
    this.prod.getTags().subscribe(res=>{
      this.tags = res;
    })
  }

  addProducts(files?){
    this.product.categories = this.selectedCat;
    this.product.tags = this.selectedTags;
   if(files){
    let file = files[0];
    console.log(file)
    this.prod.addProductMedia(this.product,file).subscribe(res=>{
      this.link = res.permalink;
      console.log("Added successfully "+res.permalink);
      this.product.name = "";
    })
  }else{
    this.prod.addProduct(this.product).subscribe(res=>{
      console.log("Added successfully "+res.permalink);
      this.product.name = "";
    })
  }
  }

}
