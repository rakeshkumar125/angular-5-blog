import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table-fix';
import { AppService } from '../shared/app.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  allPosts;	
  itemResource;  
  items = [];
  itemCount = 0;
  constructor(private service:AppService) { }

  ngOnInit() {
  	this.service.getposts().subscribe(res=>{ this.allPosts= res; });
  }

  deletePost(id){
    console.log("===");
  	if(confirm("Are you sure to delete ")) {
    	this.service.deletePost(id).subscribe(res=>{ 
    		console.log(res); 
    		this.loadPosts(); 
    	});
  	}
  }

  loadPosts(){
  	this.service.getposts().subscribe(res=>{ this.allPosts= res; });
  }

    reloadItems(params) {
        this.service.getposts1(params).subscribe((res:any)=>{ 
        //this.itemResource = new DataTableResource(res.data);
        
        this.itemCount = res.count;
        this.items= res.data;
      });
        //this.itemResource.query(params).then(items => this.items = items);
    }

    // special properties:
    rowClick(rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.title);
    }

    rowDoubleClick(rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.title);
    }

}
