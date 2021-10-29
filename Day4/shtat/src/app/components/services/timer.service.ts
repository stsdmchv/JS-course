import {Injectable, OnDestroy} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService implements OnDestroy {

  private infoTimer: any;
  private data: any = [''];

  constructor() {
    this.infoTimer = setInterval(() => {
      this.changeTime();
    }, 1000);
  }

  changeTime() {
    this.data = [new Date().toTimeString()];
  }

  getData() {
    return this.data;
  }

  ngOnDestroy(): void {
    clearInterval(this.infoTimer);
  }
}
