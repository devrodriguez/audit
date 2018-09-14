import { Component, OnInit } from '@angular/core';
import { CriteriaService } from '../../services/criteria.service';


@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css']
})
export class CriteriaComponent implements OnInit {
  
  public criterias: any;

  constructor(private criteriaService: CriteriaService) {  }

  ngOnInit() {
    
  }

}
