import { Component, OnInit } from '@angular/core';
import { AuditorService } from '../../services/auditor.service';

@Component({
  selector: 'app-auditor',
  templateUrl: './auditor.component.html',
  styleUrls: ['./auditor.component.css']
})
export class AuditorComponent implements OnInit {

  private auditors: any;

  constructor(private auditorService: AuditorService) { 
    this.auditorService.getAuditors().subscribe(auditors => {
      console.log(auditors)
      this.auditors = auditors;
    });
  }

  ngOnInit() {
  }

}
