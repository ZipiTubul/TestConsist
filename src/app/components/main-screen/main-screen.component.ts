import { Component, OnInit } from '@angular/core';
import { ImageItem } from 'src/app/classes/image-item';
import { ImagesSerivceService } from 'src/app/shared/images-serivce.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {
  ListImageFromSite: ImageItem[] = [];
  ImageChooded: ImageItem;
  constructor(private ImgService: ImagesSerivceService) { }

  ngOnInit(): void {
    this.GetListImage();

  }
  private GetListImage() {
    this.ImgService.GetListImageFromData().subscribe((dataImage) => {
      this.ListImageFromSite = dataImage;
      this.ImageChooded=this.ListImageFromSite[0];
      console.log(this.ListImageFromSite)
    })
  }
  public SetInformationImage(image:ImageItem) {
    this.ImageChooded = image;
  }
  public mouseOverImage(image:ImageItem){
console.log(image)
  }

}
