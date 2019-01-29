import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pwa';
  result: any;
  // update = false;

  constructor(updates: SwUpdate, private dataService: DataService) {
    updates.available.subscribe(event => {
        // this.update = true;

        updates.activateUpdate().then(() => {
          document.location.reload();
        });
    });
  }

  ngOnInit(): void {
    this.dataService.getJokes().subscribe((res) => {
      this.result = res;
    });
  }
}
