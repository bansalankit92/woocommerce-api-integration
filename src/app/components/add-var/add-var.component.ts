import { Attribute, Component, OnInit } from '@angular/core';
import { Products, ProductVar } from 'src/app/model/product';
import { Tags } from 'src/app/model/tags';
import { Attributes, SingleAttribute } from 'src/app/model/attributes';

import { ProductService } from 'src/app/services/product.service';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-add-var',
  templateUrl: './add-var.component.html',
  styleUrls: ['./add-var.component.scss']
})
export class AddVarComponent implements OnInit {

  tags:Tags[]=[];
  attributes:Attributes[]=[];
  selectedTags:Tags[] =[];

  categories: Tags[]=[];
  selectedCat: Tags[] =[];
  selectedAttr:Attributes;
  product:Products;
  savedProd = false;
  link="";

  productsVar: ProductVar[] =[];

  constructor(private prod:ProductService) { 
   
  }

  ngOnInit(): void {
    this.getTags();
    this.getCategories();
    this.getAttributes();
    this.product = new Products();
    this.product.type ="variable";
  }
  getAttributes() {
    this.prod.getAttributes().subscribe(res=>{
      this.attributes = res;
    })
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
    this.product.attributes.push(this.selectedAttr);
   if(files){
    let file = files[0];
    console.log(file)
    this.prod.addProductMedia(this.product,file).subscribe(res=>{
      this.onProductSuccess(res);
    },err=>alert("err"))
  }else{
    this.prod.addProduct(this.product).subscribe(res=>{
      this.onProductSuccess(res);
    },err=>alert("err"))
  }
  }

  private onProductSuccess(res: Products) {
    console.log("Added successfully " + res.permalink);
    this.product = res;
    //this.product.name = "";
    this.savedProd = true;

    this.selectedAttr.options.forEach(element => {
      let pvar = new ProductVar();
      let attr = new SingleAttribute();
      attr.id = this.selectedAttr.id;
      attr.name = this.selectedAttr.name;
      attr.option = element;
      pvar.attributes.push(attr);
      this.productsVar.push(pvar)
    });

  }

  addProductVar(prodV:ProductVar ,files?){
   if(files){
    let file = files[0];
    console.log(file)
    this.prod.addProductVarMedia(this.product.id,prodV,file).subscribe(res=>{
      this.onProductVarSuccess(res);
    },err=>alert("err var"))
  }else{
    this.prod.addProductVarMedia(this.product.id,prodV).subscribe(res=>{
      this.onProductVarSuccess(res);
    },err=>alert("err var"));
  }
  }
  onProductVarSuccess(res: ProductVar) {
    console.log(res);
    
  }

}

