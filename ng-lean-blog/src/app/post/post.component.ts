import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'ng-lean-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postName: string;
  constructor(public route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.postName = params['name'];
      console.log('this.postName', this.postName);
    });
  }

  get fileUrl() {
    return `./assets/post/${this.postName}.md`;
  }

  ngOnInit() {
  }
}
