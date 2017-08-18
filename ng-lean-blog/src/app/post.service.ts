import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PostService {

  posts = [{
    name: 'why-rx',
    title: 'Rx 初探',
  }, {
    name: 'my-view-of-cs',
    title: '我眼中的 .NET'
  }, {
    name: 'about',
    title: '关于我'
  }];

  chenmi = [{
    name: 'chenmi-index',
    title: '沉迷 - 目录',
  }, {
    name: 'chenmi-1',
    title: '1. 配角无奈潜规则，女上司怒骂实习生',
  },
  {
    name: 'chenmi-2',
    title: '2. 陈蜜儿偶遇前同事，呆书生解围虚荣女',
  },
  {
    name: 'chenmi-3',
    title: '3. 俏女郎坦露心酸事，拖延症害惨老实人',
  },
  {
    name: 'chenmi-4',
    title: '4. 高傲女宁辞不认命，白世珲假言付真情',
  },
  {
    name: 'chenmi-5',
    title: '5. 前男友奋斗小有成，苦命人终得一场空',
  },
  {
    name: 'chenmi-6',
    title: '6. 好领导假公赐良机，陈蜜儿以身不相许',
  },
  {
    name: 'chenmi-7',
    title: '7. 白世珲无奈换工作，好闺蜜好言劝不成',
  },
  {
    name: 'chenmi-8',
    title: '8. 童小有努力为佳人，陈蜜儿喜迎新人生',
  },
  {
    name: 'chenmi-9',
    title: '9. 虚荣女任性作大死，男朋友不解闹矛盾',
  },
  {
    name: 'chenmi-10',
    title: '10. 新融资故人又想见，老同学成为假想敌',
  },
  {
    name: 'chenmi-11',
    title: '11. 鬼精灵弄巧不成拙，呆书生认命不服输',
  },
  {
    name: 'chenmi-12',
    title: '12. 新领导上任三把火，人缘差蜜儿被黑锅',
  }, {
    name: 'chenmi-13',
    title: '13. 白世珲再救陈蜜儿，未婚夫惊喜瞒求婚',
  },
  {
    name: 'chenmi-14',
    title: '14. 冯珊珊暗示白世珲，无情人狠心忘旧恩',
  },
  {
    name: 'chenmi-15',
    title: '15. 局外人无意知真相，陈密儿撒下弥天谎',
  }, {
    name: 'chenmi-16',
    title: '16. 断肠人决心赌一把，冷雨夜世珲诉深情',
  }, {
    name: 'chenmi-17',
    title: '17. 为婚事蜜儿受委屈，未婚夫倔强为爱人',
  },
  {
    name: 'chenmi-18',
    title: '18. 真谎言终是难遮天，未婚夫怒指谎话精',
  }, {
    name: 'chenmi-19',
    title: '19. 李一蓝苦劝白世珲，醉酒夜闺蜜解忧肠',
  }, {
    name: 'chenmi-20',
    title: '20. 俱往矣众人皆感伤，婚礼夜前尘尽相忘',
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
