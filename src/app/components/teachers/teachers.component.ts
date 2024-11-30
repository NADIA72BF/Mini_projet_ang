import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/data.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
})
export class TeachersComponent implements OnInit {
  teachers: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getTeachers().subscribe((data) => (this.teachers = data));
  }
}