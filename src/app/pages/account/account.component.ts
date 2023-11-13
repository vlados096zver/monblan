import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  public showSidebar = false;
  public activeTab = 0;
  public tabs = [
    {
      title: 'Мій кабінет',
      icon: 'cabinet'
    },
    {
      title: 'Історія кредиту',
      icon: 'history'
    },
    {
       title: 'Заявка на кредит',
       icon: 'credit'
    },
    {
      title: 'Документи',
      icon: 'doc'
    }
  ];
  changeState(state: number) {
    this.activeTab = state;
    this.showSidebar = false;

  }

  creditApplication() {
    this.activeTab = this.tabs.findIndex(tab => tab.icon === 'credit')
  }

 changeStateSidebar() {
    this.showSidebar = !this.showSidebar;
  }

}
