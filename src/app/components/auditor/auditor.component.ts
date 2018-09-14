import { Component, OnInit } from '@angular/core';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { AuditorService } from '../../services/auditor.service';

@Component({
  selector: 'app-auditor',
  templateUrl: './auditor.component.html',
  styleUrls: ['./auditor.component.css']
})
export class AuditorComponent implements OnInit {

  public auditors: any;
  public faSave;

  constructor(private auditorService: AuditorService) { }

  ngOnInit() {
    this.faSave = faSave;
  }

}
