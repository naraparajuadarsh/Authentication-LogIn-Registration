/* --- Angular Imports --- */
import { Component, OnInit } from '@angular/core';

/* --- model Imports --- */
import { TableModel } from 'src/app/model/table-model';

/* --- service Imports --- */
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  employees:TableModel[]=[];
  listudent:TableModel[]=[];
  toatl_pages:number;

  constructor(private tableService:TableService) { 
    this.tableService.gettable().subscribe(value=>{
      console.log(value.data)
      this.employees= value.data;
      this.toatl_pages=value.total_pages;
    })
  }
  
  ngOnInit() {
  }

  liclick(value:any){
    this.tableService.gettable1(value).subscribe(value=>{
      console.log(value.data)
      this.employees=value.data
    })
  }

  counter(i:number){
    return new Array(i);
  }

}
