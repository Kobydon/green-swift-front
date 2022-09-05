import {Component, Input, Output, EventEmitter, OnInit, HostListener, AfterViewInit} from '@angular/core';
import {menuService} from '../../services/menu.service';
import {GlobalService} from '../../services/global.service';
import { ConditionalExpr } from '@angular/compiler';
import { EmployeeService } from '../../../services/employee-service.service';


@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [menuService]
})
export class SidebarComponent implements OnInit, AfterViewInit {

infoList:any;
  public menuInfo: Array<any> = [];
  public sidebarToggle = true;

  constructor(private _menuService: menuService,
              public _globalService: GlobalService, private userService:EmployeeService) {
  }



 
  
  
  ngOnInit() {
    this.getUserInfo();
    this.menuInfo = this._menuService.putSidebarJson();
    this._sidebarToggle();
    this._menuService.selectItem(this.menuInfo); /* ----->初始化判断路由isActive状态  未完成  待优化 */
    this._isSelectItem(this.menuInfo);
    
   let dropdown = document.getElementsByClassName(" btn-trasnparent");
   let i:any;
 
 for (i = 0; i < dropdown.length; i++) {
   dropdown[i].addEventListener("click", function() {
   this.classList.toggle("active");
   var dropdownContent = this.nextElementSibling;
   if (dropdownContent.style.display === "block") {
   dropdownContent.style.display = "none";
   } else {
   dropdownContent.style.display = "block";
   }
   });
 }

   
  }

  public _sidebarToggle() {
    // this._globalService._sidebarToggleState(true);
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

  }

  /* 初始化 判断当前路由状态信息 首次加载菜单状态 */
  _isSelectItem(item) {
    for (const i in item) {
      if (item[i].children) {
        for (const index in item[i].children) {
          if (item[i].children[index].isActive || item[i].children[index].toggle === 'on') {
            item[i].toggle = 'on';
            break;
          } else {
            this._isSelectItem(item[i].children);
          }
        }
      }
    }
  }


  // detect window size and automatically hide the left side menu
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.sidebarToggle = window.innerWidth >= 970;
    console.log(window.innerWidth);
  }

  ngAfterViewInit(): void {
    this.sidebarToggle = window.innerWidth >= 970;
    console.log(window.innerWidth);
  }

  
  getUserInfo(){
    this.userService.getUserInfo().subscribe((res:any)=>{
      this.infoList=res;
      this.infoList.forEach((a:any)=>{
        Object.assign(a,{role:a.roles
         })
      })
  
  

    })
  }
}
