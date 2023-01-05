import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
 images: any[];
 cover_image: any;

    responsiveOptions:any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];
  constructor() { 
    this.cover_image = "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg",
    this.images = [ {
      "previewImageSrc": "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg",
      "thumbnailImageSrc": "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg",
      "alt": "Description for Image 1",
      "title": "Title 1"
  },
  {
      "previewImageSrc": "https://cdn.pixabay.com/photo/2016/08/29/08/55/work-1627703_960_720.jpg",
      "thumbnailImageSrc": "https://cdn.pixabay.com/photo/2016/08/29/08/55/work-1627703_960_720.jpg",
      "alt": "Description for Image 2",
      "title": "Title 2"
  },
  {
      "previewImageSrc": "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg",
      "thumbnailImageSrc": "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg",
      "alt": "Description for Image 3",
      "title": "Title 3"
  },
  {
      "previewImageSrc": "dhttps://cdn.pixabay.com/photo/2016/08/29/08/55/work-1627703_960_720.jpg",
      "thumbnailImageSrc": "https://cdn.pixabay.com/photo/2016/08/29/08/55/work-1627703_960_720.jpg",
      "alt": "Description for Image 4",
      "title": "Title 4"
  },
  {
      "previewImageSrc": "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg",
      "thumbnailImageSrc": "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg",
      "alt": "Description for Image 5",
      "title": "Title 5"
  }]
  }

  ngOnInit(): void {
  }

}
