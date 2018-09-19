import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faSave, faBackward } from '@fortawesome/free-solid-svg-icons';
import { AuditorService } from '../../services/auditor.service';
import { Auditor } from '../../interfaces/auditor';
import { RoleService } from '../../services/role.service';


@Component({
  selector: 'app-auditor',
  templateUrl: './auditor.component.html',
  styleUrls: ['./auditor.component.css']
})
export class AuditorComponent implements OnInit {
  
  public auditor: Auditor = {
    name: '',
    lastName: '',
    email: ''
  };

  public roles: any;
  public roleChoice: number = 1;

  public faSave;
  public faBackward;

  constructor(private auditorService: AuditorService, private serviceRoles: RoleService) { }

  ngOnInit() {
    this.faSave = faSave;
    this.faBackward = faBackward;

    this.serviceRoles.getRoles().subscribe(roles => {
      this.roles = roles;
    });
  }

  public save() {
    this.auditor['role_id'] = this.roleChoice;
    this.auditorService.createAuditor(this.auditor)
    .subscribe(res => {
      console.log(res);
    });
  }

}
