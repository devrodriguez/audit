import { Component, OnInit } from '@angular/core';
import { CriteriaService } from '../../services/criteria.service';

@Component({
  selector: 'app-criterias',
  templateUrl: './criterias.component.html',
  styleUrls: ['./criterias.component.css']
})
export class CriteriasComponent implements OnInit {

  public criterias: any;

  constructor(private criteriaService: CriteriaService) {  }

  ngOnInit() {
    this.criteriaService.getCriterias().subscribe(criterias => {      
      this.criterias = criterias;
    });
  }

}
