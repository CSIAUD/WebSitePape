import { Component, OnInit } from '@angular/core';
import { ConditionService } from 'src/app/services/conditionService/condition.service';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {
  conditions: String[] = [];

  constructor(private conditionService: ConditionService) { }

  ngOnInit(): void {
    this.conditions = this.conditionService.getAll();
  }

}
