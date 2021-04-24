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
    NzSpinModule
  ],
})
export class AntdModule {}
