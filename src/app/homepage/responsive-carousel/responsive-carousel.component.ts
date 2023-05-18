import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { CarouselItem } from 'src/app/models/CarouselItem.model';
import { ComponentsService } from 'src/app/services/components.service';

@Component({
  selector: 'app-responsive-carousel',
  templateUrl: './responsive-carousel.component.html',
  styleUrls: ['./responsive-carousel.component.css']
})
export class ResponsiveCarouselComponent implements OnInit {
  @ViewChild('slickModal', { static: true }) slickModal!: SlickCarouselComponent;

  slideConfig = {
    "slidesToShow": 6,
    "slidesToScroll": 1,
    "arrows": false,
    "dots": false,
    "infinite": true,
    "responsive": [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  constructor(private componentsService: ComponentsService) {

  }

  ngOnInit(): void {
    this.componentsService.getComponents();
    this.componentsService.components.subscribe(result => {
      this.carouselItems = result;
      console.log(result);
    })
  }

  carouselItems: CarouselItem[] = [];

  prevSlide() {
    this.slickModal.slickPrev();
  }

  nextSlide() {
    this.slickModal.slickNext();
  }
}