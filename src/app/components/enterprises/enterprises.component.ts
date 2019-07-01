import { Component, OnInit } from '@angular/core';
import { EnterpriseService } from 'src/app/services/enterprise.service';

@Component({
  selector: 'app-enterprises',
  templateUrl: './enterprises.component.html',
  styleUrls: ['./enterprises.component.css']
})
export class EnterprisesComponent implements OnInit {

  public enterprises: any;

  constructor(private enterpriseService: EnterpriseService) { }

  ngOnInit() {
    this.enterpriseService.getEnterprises().subscribe(enterprises => {
      this.enterprises = enterprises;
    });
  }



}
