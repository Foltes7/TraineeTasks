import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {

  @Input()
  buttonName: string;

  @Output()
  clickHandler = new EventEmitter();

  @Input()
  title: string;

  @Input()
  buttonDisabled = false;

  @Input()
  buttonVieDetails = false;

  constructor() { }

  ngOnInit(): void {
  }

  buttonHandler(): void
  {
    this.clickHandler.emit();
  }

}
