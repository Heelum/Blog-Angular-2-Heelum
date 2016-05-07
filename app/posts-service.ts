import { Injectable } from '@angular/core';
import { Post }  from './post';
import {Http, Response} from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class PostService {
	constructor(private http:Http){
	}

	getPosts(){
		return this.http.get('./data.json').map(res => res.json());
	}


}



