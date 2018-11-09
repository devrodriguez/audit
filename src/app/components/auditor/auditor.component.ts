import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faSave, faBackward } from '@fortawesome/free-solid-svg-icons';
import { AuditorService } from '../../services/auditor.service';
import { Auditor } from '../../interfaces/auditor';
import { RoleService } from '../../services/role.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-auditor',
  templateUrl: './auditor.component.html',
  styleUrls: ['./auditor.component.css']
})
export class AuditorComponent implements OnInit {
  
  public auditor: any = {
    name: '',
    lastName: '',
    email: ''
  };

  public id: String;
  public roles: any;
  public roleChoice: number = 1;

  public faSave;
  public faBackward;

  constructor(private auditorService: AuditorService, private serviceRoles: RoleService, private router: Router, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(params['id'])
    })

  }

  ngOnInit() {
    this.faSave = faSave;
    this.faBackward = faBackward;

    this.auditorService.getSpecific(this.id).subscribe(auditor => {
      this.auditor = auditor;
    });

    this.serviceRoles.getRoles().subscribe(roles => {
      this.roles = roles;
    });
  }

  public save() {
    this.auditor['role_id'] = this.roleChoice;

    this.auditorService.updateAuditor(this.auditor).subscribe(res => {
      this.router.navigate(['/auditors'])
    });
  }

}
