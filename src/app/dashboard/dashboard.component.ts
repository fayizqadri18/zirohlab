import { Router } from '@angular/router';
import { ServiceService } from './../service.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dataSource: any;
  validUser: any;
  constructor(private service: ServiceService, private Router: Router) {
    this.validUser = localStorage.getItem('Email');
    if (!this.validUser) {
      alert('Unauthorized Access');
      this.Router.navigate(['']);
    }
  }
  getData() {
    this.service.getData().subscribe((data) => {
      this.dataSource = Array.from(Object.keys(data), (k) => data[k]);
      console.log(this.dataSource);
    });
  }
  ngOnInit(): void {
    this.getData();
  }
  deleteData(id: any) {
    this.service.deleteData(id).subscribe({
      next: (data) => {
        console.log(data);
        alert('Delete successful');
        this.service.getData().subscribe((data) => {
          this.dataSource = Array.from(Object.keys(data), (k) => data[k]);
          this.dataSource = this.dataSource.filter(
            (item: any) => item.id !== id
          );
        });
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }
  
  logout(){

    localStorage.clear();
    this.Router.navigate([''])
  }
}
