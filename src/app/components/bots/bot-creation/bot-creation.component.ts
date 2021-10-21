import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubAdminService } from 'src/app/core/services/subadmin.service';

@Component({
  selector: 'app-bot-creation',
  templateUrl: './bot-creation.component.html',
  styleUrls: ['./bot-creation.component.less']
})
export class BotCreationComponent implements OnInit {
  botForm: any;

  constructor(private service: SubAdminService) { }

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.botForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', null),
      email: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      address: new FormControl('', null),
      mustWin: new FormControl('', null),
      fairPlay: new FormControl('', null),
      userName: new FormControl('', null)
    })
  }

  createBot() {
    if (this.botForm.invalid) {
      return;
    }
    if (this.botForm.valid) {
      let data = this.botForm.value;
      data.isBot = true;
      data.userType = 'Bot';
      data.botType = this.botForm.value.fairPlay ? 'FairPlayBot' : (this.botForm.value.mustWin ? 'MustWinBot' : 'FairPlayBot');
      this.service.createBot(data);

    }
  }

}
