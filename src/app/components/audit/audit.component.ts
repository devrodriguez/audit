import { Component, OnInit } from '@angular/core';
import { AuditService } from '../../services/audit.service';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {

  constructor(private auditService: AuditService) { }

  public audits: any = [];

  ngOnInit() {
    this.auditService.getAudits().subscribe(res => {
      this.audits = res;
    });
  }
}
