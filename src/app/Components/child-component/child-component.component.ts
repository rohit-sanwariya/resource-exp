import { Component, inject, resource } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { PostService } from '../../Services/post.service';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.scss'
})
export class ChildComponentComponent {
  _postService = inject(PostService);
  posts = resource({
    loader:()=>{
      return firstValueFrom(this._postService.getPosts() )
    }
  })
}
