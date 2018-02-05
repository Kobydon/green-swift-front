import { Component, OnInit, Input } from '@angular/core';
import { collapse } from '../../animation/collapse-animate';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [collapse]
})
export class CardComponent {
  @Input() cardTitle: any;

  collapse: string = 'on';

  collapseCard() {
    this.collapse === 'on' ? this.collapse = 'off' : this.collapse = 'on';
  }
}