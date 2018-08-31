import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../shared/app.service';
import { DataTableResource } from 'angular-4-data-table-fix';
import persons from '../home/data-table-demo1-data';
//import { DataTableResource, DataTable } from 'angular5-data-table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    itemResource = new DataTableResource(persons);
    items = [];
    itemCount = 0;
  

  constructor(private service : AppService) { 
    this.itemResource.count().then(count => this.itemCount = count);
  }
  ngOnInit() {
	
  }

    reloadItems(params) {
        this.itemResource.query(params).then(items => this.items = items);
    }

    // special properties:
    rowClick(rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    }

    rowDoubleClick(rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    }

    rowTooltip(item) { return item.jobTitle; }


}