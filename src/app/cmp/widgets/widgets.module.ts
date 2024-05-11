import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { MaterialModule } from '../app.module';

import { WidgetsComponent } from './widgets.component';
import { WidgetsRoutes } from './widgets.routing';
import { MaterialModule } from 'src/app/app.module';

@NgModule({
    imports: [
        RouterModule.forChild(WidgetsRoutes),
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    declarations: [WidgetsComponent]
})

export class WidgetsModule {}
