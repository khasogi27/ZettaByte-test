import { NgModule } from '@angular/core';

import { RoutesRoutingModule } from './routes-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '@shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { DialogMentorComponent } from './dashboard/dialog-mentor/dialog-mentor.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DialogMentorComponent
  ],
  imports: [
    SharedModule,
    RoutesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class RoutesModule { }
