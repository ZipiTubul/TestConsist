import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ImageItem } from '../classes/image-item';

@Injectable({
  providedIn: 'root'
})
export class ImagesSerivceService {

  constructor(private http:HttpClient) { }
  public GetListImageFromData():Observable<ImageItem[]>{
    return this.http.get<ImageItem[]>(`https://picsum.photos/v2/list`);
  }
}
