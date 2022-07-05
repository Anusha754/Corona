import { Component, OnInit } from '@angular/core';
import { RetailserviceService } from '../retailservice.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  object:any=[];
  summary: any = []
  district: any= []
   value: any;
   public total = 0;
   public homeTotal = 0;
   public hospitalTodayTotal = 0;
  constructor(private service:RetailserviceService) {} 

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.service.getData().subscribe(res => {
      this.object = res;
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
      this.findsum(this.district)
    })
  }

  findsum(data: any) {
    this.value=data
    console.log(this.value)
    for(let j=0;j<data.length;j++) {
      this.total+= this.value[j].hospital_obs;
      this.homeTotal+= this.value[j].home_obs;
      this.hospitalTodayTotal+= this.value[j].hospital_today;
    }
  }

   tableToCSV() {
 
    var csv_data: any = [];

    // Get each row data
    var rows = document.getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {

        // Get each column data
        var cols = rows[i].querySelectorAll('td,th');

        // Stores each csv row data
        var csvrow = [];
        for (var j = 0; j < cols.length; j++) {

            // Get the text data of each cell
            // of a row and push it to csvrow
            csvrow.push(cols[j].innerHTML);
        }

        // Combine each column value with comma
        csv_data.push(csvrow.join(","));
    }

    // Combine each row data with new line character
    csv_data = csv_data.join('\n');

    // Call this function to download csv file 
    this.downloadCSVFile(csv_data);

}

 downloadCSVFile(csv_data:any) {

    // Create CSV file object and feed
    // our csv_data into it
    var CSVFile = new Blob([csv_data], {
        type: "text/csv"
    });

    // Create to temporary link to initiate
    // download process
    var temp_link = document.createElement('a');

    // Download csv file
    temp_link.download = "GfG.csv";
    var url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;

    // This link should not be displayed
    temp_link.style.display = "none";
    document.body.appendChild(temp_link);

    // Automatically click the link to
    // trigger download
    temp_link.click();
    document.body.removeChild(temp_link);
}
  
}
