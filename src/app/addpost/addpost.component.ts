import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})

export class AddpostComponent implements OnInit {
  categories;
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
  constructor(private service:AppService, private fb:FormBuilder) { }

  postForm;
  postFormError = new Map();
  ngOnInit() {

  	this.service.getCategories().subscribe(res=>{
  		this.categories = res;
  	})
  	this.postForm = this.fb.group({
  		category:[""],
  		content:[""],
  		title:[""]
  	});


  }

  errorMessage(control){
    return this.postFormError.get(control);
  }
  errorClass(control){
    return (this.postFormError.get(control) != undefined && this.postFormError.get(control).length>0) ? 'has-error' :'';
  }

  addPost(){
    let post={
      title:this.postForm.get('title').value,
      content:(typeof(this.postForm.get('content').value) != 'undefined')? this.postForm.get('content').value : "",
      category:this.postForm.get('category').value,
      userID : localStorage.getItem('user_id')
    };

    this.service.addPost(post).subscribe(res=>{
      if(res==false){
        this.postFormError.clear();
      }else{
        this.postFormError.clear();
        for(let error in res){
          this.postFormError.set(res[error].error_field,res[error].error);
        }
      }
    });
  }
}
