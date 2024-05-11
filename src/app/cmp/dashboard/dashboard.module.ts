import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../app.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { MdModule } from '../md/md.module';
import { MasterPageComponent } from './master-page/master-page.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DashboardRoutes),
        FormsModule,
        MdModule,
        MaterialModule
    ],
    declarations: [DashboardComponent, MasterPageComponent, ]
})

export class DashboardModule {}
