import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
	images: string[] = ['LB_IFPE_4', 'LB2_ResidII', 'LB_SEE2','LB3','LB4i','LB6'].map((n) => `http://www.upenet.com.br/banners/${n}.png`);

}
