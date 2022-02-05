import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataSource } from '../dashboard.component';

@Component({
  selector: 'app-dialog-mentor',
  templateUrl: './dialog-mentor.component.html',
  styleUrls: ['./dialog-mentor.component.scss']
})
export class DialogMentorComponent implements OnInit {
  dataSource: DataSource[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public $data: DataSource[]) {}

  ngOnInit(): void {
    this.dataSource = this.$data;
  }

}
