import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../shared/app.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editp',
  templateUrl: './editp.component.html',
  styleUrls: ['./editp.component.css']
})
export class EditpComponent implements OnInit {
	postID;
  categories;
  postForm;
  existPost;
  postTitle;
  postCategoryID;
  postUpdatestatus = false;
  postFormError =  new Map();
  editorConfig = {
    "editable": true,
    "spellcheck": true,
    "height": "auto",
    "minHeight": "200px",
    "width": "auto",
    "minWidth": "0",
    "translate": "yes",
    "enableToolbar": true,
    "showToolbar": true,
    "placeholder": "Enter text here...",
    "imageEndPoint": "",
    "toolbar": [
        ["bold", "italic", "underline", "strikeThrough"],
        ["fontName", "fontSize", "color"],
        ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
        [ "removeFormat", "undo", "redo"],
        ["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"],
        ["link", "unlink", "image", "video"]
    ]
};   

  htmlContent;
  constructor(private route:ActivatedRoute, private service:AppService, private fb:FormBuilder, private router: Router) {
  	this.route.params.subscribe(res => { this.postID= res.id; });
  }

  ngOnInit() {
  	
    this.service.getCategories().subscribe(res=>{
      this.categories = res;
    });


    this.postForm = this.fb.group({
      category:[""],
      content:[""],
      title:[""]
    });


        let postID =this.postID;
    this.service.getSinglePosts(postID).subscribe(res=>{ 
      this.existPost = res;
      this.htmlContent = res.content;
      this.postTitle = res.title;
      this.postCategoryID = res.category;
  
      });

  }

  errorMessage(control){
    return this.postFormError.get(control);
  }
  errorClass(control){
    return (this.postFormError.get(control) != undefined && this.postFormError.get(control).length>0) ? 'has-error' :'';
  }
 
  addPost(){
    let postForm;
    postForm = {
        title:this.postForm.get('title').value,
        content:(typeof(this.postForm.get('content').value) != 'undefined')? this.postForm.get('content').value : "",
        category:this.postForm.get('category').value,
        userID : localStorage.getItem('user_id'),
        postID : this.postID
      }

      this.service.updatePost(postForm).subscribe(res=>{ if(res==false){
        this.postUpdatestatus = true;
         setTimeout((router: Router) => {
            this.router.navigate(['posts']);
        }, 1000);  
        

      } });
  }
}
