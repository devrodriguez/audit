import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EnterpriseService } from 'src/app/services/enterprise.service';

import { faSave, faBackward } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit {

  public id: string;
  public faSave;
  public faBackward;

  public enterprise: any = {
    nit: '',
    name: ''
  };

  constructor(private enterpriseService: EnterpriseService,
              private router: Router,
              private route: ActivatedRoute) { 
                this.route.params.subscribe(params => this.id = params['id']);
              }

  ngOnInit() {
    this.faSave = faSave;
    this.faBackward = faBackward;
    
    this.enterpriseService.getEnterprise(this.id).subscribe(enterprise => {
      this.enterprise = enterprise;
    });
  }

  save() {
    if(this.enterprise.id != null) {
      this.enterpriseService.updateEnterprise(this.enterprise).subscribe(res => {
        this.router.navigate(['/enterprises']);
      });
    }
    else
    {
      this.enterpriseService.createEnterprise(this.enterprise).subscribe(res => {
        this.router.navigate(['/enterprises']);
      });
    }
  }

}
