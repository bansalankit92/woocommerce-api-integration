import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  links = [{
    label:"Add Simple",
    link:""
  },
  {
    label:"Add Variable",
    link:"add-variable"
  },
  {
    label:"Edit",
    link:"edit"
  },
  {
    label:"list",
    link:"list"
  }];
  activeLink = this.links[0];
  background = 'primary'

  ngOnInit(): void {
  }

}
