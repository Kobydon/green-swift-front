import {AfterViewInit, Component, Input} from '@angular/core';
import { Router } from '@angular/router';

import { userService } from '../../../services/user-service.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'pages-top',
  templateUrl: './pages-top.component.html',
  styleUrls: ['./pages-top.component.scss'],
})
export class PagesTopComponent implements AfterViewInit {
  avatarImgSrc: string = 'assets/images/swiss.jpg';
  userName: string = 'kevin';
  userPost: string = 'Green Swiss Bank';


  sidebarToggle: boolean = true;
  tip = {ring: true, email: true};

  constructor(private _globalService: GlobalService,private userService:userService,private router:Router) {
  }

  logout(){
    this.userService.logout();
    

  }
  public _sidebarToggle() {
    /* this._globalService.sidebarToggle$.subscribe(sidebarToggle => {
      this.sidebarToggle = sidebarToggle;
    }, error => {
      console.log('Error: ' + error);
    }); */

    this._globalService.data$.subscribe(data => {
      if (data.ev === 'sidebarToggle') {
        this.sidebarToggle = data.value;
      }
    }, error => {
      console.log('Error: ' + error);
    });
    this._globalService.dataBusChanged('sidebarToggle', !this.sidebarToggle);


    //this._globalService._sidebarToggleState(!this.sidebarToggle);
  }


  ngAfterViewInit(): void {
    this.sidebarToggle = window.innerWidth >= 970;
  }
}
