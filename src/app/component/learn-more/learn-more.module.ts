import { PageInfoTitleModule } from './../page-info-title/page-info-title.component.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/module/shared.module";
import { IonicModule } from "@ionic/angular";
import { LearnMoreComponent } from './learn-more.component';

@NgModule({
  imports: [CommonModule, SharedModule, IonicModule, PageInfoTitleModule],

  declarations: [LearnMoreComponent],
  exports: [LearnMoreComponent],
  entryComponents: [LearnMoreComponent]
})
export class LearnMoreModule {}
