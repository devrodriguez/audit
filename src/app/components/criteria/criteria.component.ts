import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CriteriaService } from '../../services/criteria.service';
import { Criteria } from '../../interfaces/criteria';

import { faSave, faBackward } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css']
})
export class CriteriaComponent implements OnInit {
  
  public criteria: any = {
    title: '',
    description: ''
  };
  
  public id: String;
  public faSave;
  public faBackward;

  constructor(private criteriaService: CriteriaService, private router: Router, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit() {
    this.faSave = faSave;
    this.faBackward = faBackward;

    this.criteriaService.getSpecific(this.id).subscribe(criteria => {
      this.criteria = criteria;
    });
  }

  save() {
    this.criteriaService.createCriteria(this.criteria).subscribe(res => {
      console.log(res);
    });
  }

}
