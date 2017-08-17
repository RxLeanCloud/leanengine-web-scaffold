import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'ng-lean-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts = [{
    name: 'why-rx',
    text: 'Rx 初探'
  }, {
    name: 'about',
    text: '关于我'
  }];
  constructor(private router: Router, ) { }

  ngOnInit() {
  }
  get links() {
    return this.posts.map(post => {
      return {
        url: `${post.name}`,
        text: `${post.text}`,
      };
    });
  }
  go(link) {
    this.router.navigate([`/post/`, link.url]);
  }
}
