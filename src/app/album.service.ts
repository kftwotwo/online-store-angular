import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-albums';

@Injectable()
export class AlbumService {

  constructor() { }

  getAlbums(): Album[] {
    return ALBUMS;
  }

  getAlbumById(albumId: number): Album {
    for (var i = 0; i <= ALBUMS.length - 1; i++) {
      if(ALBUMS[i].id === albumId) {
        return ALBUMS[i];
      }
    }
  }

}
