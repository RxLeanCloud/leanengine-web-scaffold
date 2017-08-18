import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
import { Title } from '@angular/platform-browser';
import { PostService } from '../post.service';

@Component({
  selector: 'ng-lean-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postName: string;
  constructor(public route: ActivatedRoute,
    public postService: PostService,
    private titleService: Title) {
    route.params.subscribe(params => {
      this.postName = params['name'];
      this.postService.first(this.postName).subscribe(post => {
        this.titleService.setTitle(post.title);
      });
    });
  }

  get fileUrl() {
    return `./assets/post/${this.postName}.md`;
  }

  ngOnInit() {
  }
}
