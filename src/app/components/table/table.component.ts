import { Component, OnInit } from '@angular/core';
import { TableModel } from 'src/app/model/table-model';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  employees:TableModel[]=[];

  constructor(private tableService:TableService) { 
    this.tableService.gettable().subscribe(value=>{
      console.log(value.data)
      this.employees= value.data
    })
  }
  
  ngOnInit() {
  }

}
