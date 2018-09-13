import { Component, OnInit } from '@angular/core';
import { CriteriaService } from '../../services/criteria.service';


@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css']
})
export class CriteriaComponent implements OnInit {
  private criterias: any;

  constructor(private criteriaService: CriteriaService) { 
    this.criteriaService.getCriterias().subscribe(criterias => {
      console.log(criterias)
      this.criterias = criterias;
    });
  }

  ngOnInit() {
  }

}
