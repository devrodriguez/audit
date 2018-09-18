import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faSave, faBackward } from '@fortawesome/free-solid-svg-icons';
import { AuditorService } from '../../services/auditor.service';
import { Auditor } from '../../interfaces/auditor';


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

  public faSave;
  public faBackward;


  constructor(private auditorService: AuditorService) { }

  ngOnInit() {
    this.faSave = faSave;
    this.faBackward = faBackward;
  }

  public save() {
    this.auditorService.createAuditor(this.auditor)
    .subscribe(res => {
      console.log(res);
    });
  }

}
