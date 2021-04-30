import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTagModule } from 'ng-zorro-antd/tag';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  exports: [
    NzIconModule,
    NzInputModule,
    NzBadgeModule,
    NzAvatarModule,
    NzDropDownModule,
    NzDividerModule,
    NzFormModule,
    NzButtonModule,
    NzCheckboxModule,
    NzCardModule,
    NzSpinModule,
    NzImageModule,
    NzSpaceModule,
    NzListModule,
    NzTypographyModule,
    NzEmptyModule,
    NzCommentModule,
    NzUploadModule,
    NzCollapseModule,
    NzSkeletonModule,
    NzCarouselModule,
    NzToolTipModule,
    NzTagModule,
  ],
})
export class AntdModule {}
