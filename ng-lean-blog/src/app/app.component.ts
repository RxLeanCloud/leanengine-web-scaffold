import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ng-lean-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    this.initTranslate();
  }
  title = 'ng-lean';

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('zh-cn');

    if (this.translate.getBrowserLang() !== undefined) {
      let locale = this.translate.getBrowserLang();
      console.log('locale', locale);
      this.translate.use(locale);
    } else {
      this.translate.use('zh-cn'); // Set your language here
    }
  }
}
