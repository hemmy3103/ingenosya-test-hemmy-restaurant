import { RestaurantService } from './../../services/restaurant.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-liste-menu',
  templateUrl: './liste-menu.component.html',
  styleUrls: ['./liste-menu.component.css']
})
export class ListeMenuComponent implements OnInit {

  ELEMENT_DATA = [];
  displayedColumns : any;
  cardTitle: string = "Menus";
  cardSubtitle: string = "Liste des menus";
  constructor(public restoServ: RestaurantService) { }
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource:any;
  
  ngOnInit(): void {
    this.setDataSource();
    this.displayedColumns = [];
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  setDataSource(){
    const onSuccess=(resp:any)=>{
      this.ELEMENT_DATA = resp;
    };
    const onError=(resp:any)=>{
      console.log("SOME ERROR");
    };

    this.restoServ.getAllMenu()
      .subscribe(onSuccess, onError);
  }
}
