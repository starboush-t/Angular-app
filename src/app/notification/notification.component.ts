import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `
    <div class="alert alert-success" [hidden]="displayedNotification">
      <p>This website uses cookies to provide better user experience</p>
      <div class="close">
        <button class="btn" (click)="closeNotification()">X</button>
      </div>
    </div>
  `,
  styles: [
    `
      .notification-div {
        margin: 10px 0;
        padding: 10px 20px;
        background-color: #fad7a0;
        text-align: center;
      }
    `,
    `
      p {
        font-size: 14px;
      }
    `,
    `
      .close {
        float: right;
        margin-top: -15px;
      }
    `,
  ],
})
export class NotificationComponent {
  displayedNotification: boolean = false;

  closeNotification() {
    this.displayedNotification = true;
  }
}
