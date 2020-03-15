import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'teruya-button',
  templateUrl: './teruya-button.component.html',
  styleUrls: ['./teruya-button.component.scss']
})
export class TeruyaButtonComponent implements OnInit {

  @Input() label = "Button"
  // @Input() icon: string;
  // @Input() size: string;

  onClick(event: MouseEvent) {

  }


  constructor() { }

  ngOnInit() {
  }

}
