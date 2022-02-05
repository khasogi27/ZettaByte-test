import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DataServiceService } from '@shared/services/data-service.service';
import { DialogMentorComponent } from './dialog-mentor/dialog-mentor.component';

export interface DataSource {
  _id?: string,
  email: string,
  civility: string,
  first_name: string,
  last_name: string,
  company: { name?: string, user_type?: string },
  user_status: string,
  count_document: number
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['Name', 'User_type', 'Entity', 'Status', 'Action'];
  dataSource: DataSource[] = [];

  constructor(private dataService: DataServiceService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataSource = this.dataService.getData();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogMentorComponent, {
      data: this.dataSource
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
