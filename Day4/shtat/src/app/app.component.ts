import {Component, OnInit} from '@angular/core';
import {TimerService} from "./components/services/timer.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TimerService],
})
export class AppComponent implements OnInit {
  title = 'Штатное расписание';
  time: string = "time";
  constructor(public timerService: TimerService) {
  }

  ngOnInit(): void {
      this.time = this.timerService.getData();
  }
  get(){
    this.time = this.timerService.getData();
  }
}
