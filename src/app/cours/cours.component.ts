import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<any[]>('https://dummyjson.com/users').subscribe(
      (response) => {
        
        this.users = response.map(user => ({
          firstName: user.firstName,
          lastName: user.lastName
        }));
        console.log(this.users); 
      },
      (error) => {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
      }
    );
  }

  saveAsJson() {
    
    const json = JSON.stringify(this.users);
    const blob = new Blob([json], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'users.json';
    anchor.click();
  }
}
