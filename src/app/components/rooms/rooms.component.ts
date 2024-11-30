import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/data.service';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "rooms.component.html",
  styleUrl: "rooms.component.css",
})
export class RoomsComponent implements OnInit {
  rooms: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getRooms().subscribe((data) => (this.rooms = data));
  }
}
