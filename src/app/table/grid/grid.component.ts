import { Component, OnInit } from '@angular/core';
import { RetailserviceService } from 'src/app/retailservice.service';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  
  object:any=[];
  summary: any = []
  district: any= []

  constructor(private service:RetailserviceService) {} 

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.service.getData().subscribe(res => {
      this.object = res;
      console.log(res)
     this.summary.push(this.object.summary)
      this.district.push(this.object.summary.Thiruvananthapuram)
      this.district.push(this.object.summary.Kollam)
      this.district.push(this.object.summary.Palakkad)
      this.district.push(this.object.summary.Pathanamthitta)
      this.district.push(this.object.summary.Kozhikode)
      this.district.push(this.object.summary.Kannur)
      this.district.push(this.object.summary.Kasaragod)
      this.district.push(this.object.summary.Kottayam)
      this.district.push(this.object.summary.Alappuzha)
      this.district.push(this.object.summary.Idukki)
      this.district.push(this.object.summary.Ernakulam)
      this.district.push(this.object.summary.Thrissur)
      this.district.push(this.object.summary.Malappuram)
      this.district.push(this.object.summary.Wayanad)
    })
  }

  
  export() {
    this.service.exportToCsv('test.csv',this.district)
  }
}
