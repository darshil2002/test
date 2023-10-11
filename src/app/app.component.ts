import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  data = [
    { date: '2023-10-11', booleanValue: true },
    { date: '2023-10-12', booleanValue: true },
    { date: '2023-10-13', booleanValue: true },
    { date: '2023-10-14', booleanValue: true },
    { date: '2023-10-15', booleanValue: true },
    { date: '2023-10-16', booleanValue: true },
    { date: '2023-10-17', booleanValue: true },
    { date: '2023-10-18', booleanValue: true },
    { date: '2023-10-19', booleanValue: true },
    { date: '2023-10-20', booleanValue: true },
  ];
  
  getTooltipText(item: any): string {
    return `Date: ${item.date}, Boolean Value: ${item.booleanValue ? 'True' : 'False'}`;
  }

  showMobileTooltip(event: MouseEvent) {
    const target = event.currentTarget as HTMLDivElement;
    target.click(); // Trigger click event to show the mobile tooltip
  }
}
