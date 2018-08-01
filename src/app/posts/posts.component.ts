import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  allPosts;	
  constructor(private service:AppService) { }

  ngOnInit() {
  	this.service.getposts().subscribe(res=>{ this.allPosts= res; });
  }

  deletePost(id){

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


}
