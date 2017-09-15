import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PostService {

  posts = [{
    name: 'why-rx',
    title: 'Rx 初探',
  }, {
    name: 'about',
    title: '关于我'
  }];

  get current() {
    return this.posts;
  }
  constructor() {

  }

  first(name: string) {
    let post = this.current.find(p => p.name == name);
    return Observable.from([post]);
  }
  all() {
    return Observable.from([this.current]);
  }
}
