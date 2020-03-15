import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'sticky-button',
  templateUrl: './sticky-button.component.html',
  styleUrls: ['./sticky-button.component.scss']
})
export class StickyButtonComponent implements OnInit {

  @Input() label = "Sticky Button" 
  @Input() color = "orange" 

  constructor() { }

  ngOnInit() {
  }

}
