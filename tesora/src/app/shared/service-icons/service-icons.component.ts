import { Component } from '@angular/core';

@Component({
  selector: 'app-service-icons',
  standalone: true,
  imports: [],
  templateUrl: './service-icons.component.html',
  styleUrl: './service-icons.component.scss'
})
export class ServiceIconsComponent {
services = [
  { icon: 'signage', title: 'Retail Signage' },
  { icon: 'traffic', title: 'Traffic Signs' },
  { icon: 'hotel', title: 'Hotel Signage' },
  { icon: 'vehicle', title: 'Vehicle Graphics' },
  { icon: 'media', title: 'Outdoor Media' },
  { icon: 'maintenance', title: 'Maintenance' }
];

}
