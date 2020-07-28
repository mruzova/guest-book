import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  constructor() {}
  angryPepe = './images/5cc97e56eb15616a731583b3.png';
  ngOnInit(): void {}
  @Input() message: string;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
