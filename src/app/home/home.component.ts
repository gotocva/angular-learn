import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // public employees = [
  //   {
  //     "name" : "siva",
  //     "description" : "Blockchain developer",
  //     "image" : "https://instagram.fcjb1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/70368963_520339608508725_6217150725022023680_n.jpg?_nc_ht=instagram.fcjb1-1.fna.fbcdn.net&_nc_ohc=lq4xqlQCRskAX-GTuj-&oh=83cdf25d30f0d7d290d6a26b4613b4f9&oe=5E95D549"
  //   },
  //   {
  //     "name" : "silu vandu",
  //     "description" : "Kutty pulla",
  //     "image" : "https://instagram.fcjb1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/84890579_573405893388724_6532084472879614282_n.jpg?_nc_ht=instagram.fcjb1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=9rsVMZuNB2wAX9qMX4D&oh=3cfd3435cbc4a99e46043714efabc671&oe=5E9744DA"
  //   }
  // ];
  // above sample static data
  public employees : [];
   
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    
    this.httpClient.get("http://127.0.0.1:4201/employees").subscribe(
      (employees : []) => {
    this.employees = employees;
    console.log(employees);
    },(error) => {
      alert("Api is not working");
      console.log(error);
    })
  } 

}
