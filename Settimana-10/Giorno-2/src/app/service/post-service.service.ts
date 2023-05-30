import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor() { }
  async getPosts(){
    return await (await fetch('./assets/db.json')).json()
  }
}


