import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent {
data:any=[];
  constructor(private userservice:UserServiceService) { 
    this.userservice.getData().subscribe(data=>{
      console.log(data);
      this.data=data;
    })
  }

}
