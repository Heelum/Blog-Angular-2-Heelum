import {Component} from '@angular/core';
import { PostService }  from './posts-service';
import { Post }  from './post';
import { RouteParams, Router } from '@angular/router-deprecated';

@Component({
  templateUrl: './views/detail.html',
  providers: [PostService]
})
export class DetailComponent { 

	
	selectedPost: Post;

	constructor(private postService: PostService,  private routeParams: RouteParams, private router:Router){}

	getPosts() {
		let id = this.routeParams.get('id');
    	this.postService.getPosts().subscribe(
    			data => {
    				let posts: Post[] = data
    				this.selectedPost = posts.filter(post => post.slug === id)[0]
    				if(this.selectedPost == undefined) 
    					this.router.navigate(['Grid']);
    				
    			},
    			error => console.log(error)
    		);
  	}

  	

    ngOnInit() {
    	this.getPosts();
  	}
}