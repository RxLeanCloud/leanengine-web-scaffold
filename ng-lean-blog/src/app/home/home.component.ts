import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Title } from '@angular/platform-browser';
import { PostService } from '../post.service';
import { Observable, Subscriber } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ng-lean-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    public postService: PostService,
    public translate: TranslateService,
    private titleService: Title) {
    this.translate.get(['title']).subscribe(values => {
      let title = values['title'];
      this.titleService.setTitle(title);
    });

  }

  ngOnInit() {
  }

  get postsAsync() {
    // let result = Observable.from([this.posts]);
    let result = this.postService.all();
    return result;
  }

}
