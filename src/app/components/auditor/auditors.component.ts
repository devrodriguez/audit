import { Component, OnInit } from '@angular/core';
import { AuditorService } from '../../services/auditor.service';

@Component({
  selector: 'app-auditors',
  templateUrl: './auditors.component.html',
  styleUrls: ['./auditors.component.css']
})
export class AuditorsComponent implements OnInit {

  public auditors: any;

  constructor(private auditorService: AuditorService) { }

  ngOnInit() {
    this.auditorService.getAuditors().subscribe(auditors => {
      console.log(auditors)
      this.auditors = auditors;
    });
  }

}
