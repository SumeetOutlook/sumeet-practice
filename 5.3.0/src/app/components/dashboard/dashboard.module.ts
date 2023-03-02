import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatSortModule } from '@angular/material/sort'
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { FileUploadModule } from 'ng2-file-upload';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedMaterialModule } from '../../shared/shared-material.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { DashboardRoutes } from './dashboard.routing';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardFilterDialogComponent } from './dialog/dashboard-filter-dialog/dashboard-filter-dialog.component';
import {MatSelectInfiniteScrollModule} from 'ng-mat-select-infinite-scroll';


export const dtFORMAT = {
  parse: {
    dateInput: "DD-MMM-YYYY"
  },
  display: {
    dateInput: "DD-MMM-YYYY",
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: "DD-MMM-YYYY",
    monthYearA11yLabel: 'MMMM YYYY',
  }
};


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatSelectInfiniteScrollModule,
    ReactiveFormsModule,
    MatButtonModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
    MatTooltipModule,
    NgxMatSelectSearchModule,
    MatPaginatorModule,
    MatDialogModule,
    FileUploadModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatListModule,
    MatCheckboxModule,
    MatMenuModule,
    MatExpansionModule,
    MatSidenavModule,
    HttpClientModule,
    SharedMaterialModule,
    DragDropModule,
    RouterModule.forChild(DashboardRoutes)
  ],
  declarations: [
    
  DashboardComponent,
    
  DashboardFilterDialogComponent],
  exports: [],
  entryComponents: [
    
  ],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: dtFORMAT }]

})
export class DashboardModule { }