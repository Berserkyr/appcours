import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cours',
  standalone: true,
  imports: [],
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.css'
})

export class CoursComponent {
  constructor(private http: HttpClient) { }


}
