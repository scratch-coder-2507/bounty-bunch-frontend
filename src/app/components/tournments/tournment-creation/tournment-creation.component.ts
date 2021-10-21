import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubAdminService } from 'src/app/core/services/subadmin.service';
import * as moment from "moment";
@Component({
  selector: 'app-tournment-creation',
  templateUrl: './tournment-creation.component.html',
  styleUrls: ['./tournment-creation.component.less']
})
export class TournmentCreationComponent implements OnInit {

  constructor(public activatedRoute: ActivatedRoute, private service: SubAdminService) {
  }
  @ViewChild('closeBtn') closeBtn!: ElementRef;
  tournmentForm: any;
  gameData: any;
  gameId: any = this.activatedRoute.snapshot.paramMap.get('id');
  gName: any;
  sectionType: any;
  tournmentType: any;
  attemptsType: any;
  mode: any;
  botAlternateType: any;
  tableName: any;
  tournment: any = {
    tableName: '',
    gameName: '',
    section: '',
    tournmentType: '',
    tableImage: '',
    attempts: '',
    noOfAttempts: '',
    entryFee: '',
    winningAmount: '',
    adminStake: '',
    mode: '',
    tournmentSize: '',
    noOfWinners: '',
    description: '',
    rules: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    alternateDate: '',
    alternateTime: '',
    regStartTime: '',
    regStartDate: '',
    regEndTime: '',
    regEndDate: '',
    fairPlay: '',
    mustWin: '',
    bonus: '',
    autoCreate: true
  };
  poolAmount: any;
  remainingAmount: any;
  public prizeData: any[] = [{
    fromPosition: '',
    toPosition: '',
    prizeAmount: '',
    totalAmount: ''
  }];
  ngOnInit(): void {
    // this.setForm();
    this.getGames(this.gameId);
  }

  getGames(id: any) {
    this.service.getGameById(id).subscribe((data) => {
      console.log(data.data);
      this.gameData = data.data.data;
      this.gName = this.gameData.gameName;
      this.tournment.gameName = this.gName;
      console.log(this.gName);
      // this.tournmentForm.get('gameName').setValue(this.gName);
    })
  }

  createTournment() {
    // console.log(this.tournment, this.tableName);
    if (this.tournment) {
      let data = this.tournment;
      // console.log(data);
      data.gameId = this.gameId;
      data.bot = this.tournment.mustWin ? 'MustWinBot' : (this.tournment.fairPlay ? 'FairPlayBot' : 'MustWinBot');
      data.startDateAndTime = this.tournment.startDate + 'T' + this.tournment.startTime;
      data.endDateAndTime = this.tournment.endDate + 'T' + this.tournment.endTime;
      data.alternateDateAndTime = this.tournment.alternateDate + 'T' + this.tournment.alternateTime;
      data.regStartDateAndTime = this.tournment.regStartDate + 'T' + this.tournment.regStartTime;
      data.regEndDateAndTime = this.tournment.regEndDate + 'T' + this.tournment.regEndTime;
      console.log(data);
      this.service.createTournment(data, this.gameId);

    }
  }

  addAnotherPrize() {
    this.prizeData.push({
      fromPosition: '',
      toPosition: '',
      prizeAmount: '',
      totalAmount: ''
    });
  }

  removePrize(i: number) {
    this.prizeData.splice(i, 1);
  }

  savePrizeData() {
    console.log(this.prizeData);
    let arry = [];
    let totalPrize = 0;
    let diff;
    for (let data of this.prizeData) {
      diff = (Number(data.toPosition) - Number(data.fromPosition) + 1);
      totalPrize = totalPrize + Number(Number(data.prizeAmount) * diff);
      arry.push({ winnerCount: data.fromPosition + '-' + data.toPosition, prize: data.prizeAmount });
    }
    // this.tournmentForm.value.winner = arry;
    // this.tournmentForm.get('winner').setValue(arry);
    this.tournment.winners = arry;
    // this.tournment.winningAmount = totalPrize;
    this.closeBtn.nativeElement.click();
    this.prizeData = [{
      fromPosition: '',
      toPosition: '',
      prizeAmount: '',
      totalAmount: ''
    }];
  }

  onChangeSection(e: any) {
    console.log("event", e.target.value);
    this.sectionType = e.target.value;
  }
  onChangeTournment(e: any) {
    this.tournmentType = e.target.value;
  }
  onChangeAttempts(e: any) {
    this.attemptsType = e.target.value;
    if (this.attemptsType === 'Single') {
      this.tournment.noOfAttempts = 1;
    }
  }
  onChangeMode(e: any) {
    this.mode = e.target.value;
  }
  onChangeBotAlternate(e: any) {
    this.botAlternateType = e.target.value;
  }
  onEnter() {
    console.log("here");
    this.poolAmount = this.tournment.winningAmount;
    this.remainingAmount = this.poolAmount;
  }
  onEnterPrize(i: any) {
    let diff = (Number(this.prizeData[i].toPosition) - Number(this.prizeData[i].fromPosition) + 1);
    this.prizeData[i].totalAmount = Number(Number(this.prizeData[i].prizeAmount) * diff);
    this.remainingAmount -= this.prizeData[i].totalAmount;
  }
}
