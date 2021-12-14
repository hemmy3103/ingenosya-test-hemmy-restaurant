import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  }
  @Input() ELEMENT_DATA: any;
  @Input()  displayedColumns: any;
  @Input()  cardTitle: any;
  @Input()  cardSubtitle: any;
  dataSource:any;
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
