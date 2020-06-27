import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';


@Component({
  selector: 'expense-navbar',
  templateUrl: './expense-navbar.component.html',
  styleUrls: ['./expense-navbar.component.css']
})
export class ExpenseNavbarComponent implements OnInit {

  constructor(private eletronService: ElectronService) { }

  ngOnInit() {}

  closeApp(){
    this.eletronService.ipcRenderer.send('close-window')
  }

  minimizeApp(){
    this.eletronService.ipcRenderer.send('minimize-window')
  }

}
