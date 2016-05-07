import {Component} from '@angular/core';
import { Post }  from './post';
import { PostService }  from './posts-service';
import { Router } from '@angular/router-deprecated';


@Component({
  templateUrl: './views/home.html',
    providers: [PostService]
})
export class HomeComponent { 
	title = "Lista Pots";
	posts: Post[];

	constructor(private postService: PostService, private router: Router){}

	getPosts() {
    	this.postService.getPosts().subscribe(
    			data => this.posts = data,
    			error => console.log(error),
    			() => console.log("Finished")
    		);
  	}

     selectPost(post: Post){
         this.router.navigate(['Posts', { id: post.slug }]);
     }

  	ngOnInit() {
    	this.getPosts();
  	}


}