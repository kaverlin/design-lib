import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


export interface ChipData{
  id: number,
  name?: string,
  data: any,
  img?: string 
}
@Component({
  selector: 'app-chip-input',
  templateUrl: './chip-input.component.html',
  styleUrls: ['./chip-input.component.scss']
})
export class ChipInputComponent implements OnInit {

  inputHasFocus = false;
  selectedData: ChipData[] = [];
  showDataDropDown = false;
  filterData: any[] = [];
  @Input('placeholder') inputLabel: string = ''
  inputData: ChipData[] = [] ;
  @Output('emitOutPutData') outputData: EventEmitter<ChipData[]> = new EventEmitter();
  @Input()  set basedata(data: any){
    this.selectedData = [];
    this.inputData =data;
    this.showDataDropDown = false;
    this.inputHasFocus = false;
  }
  constructor() { }

  ngOnInit(): void {
    this.filterData = this.inputData;
  }

  get canPresentSelectedList(){
    return this.selectedData?.length>0 || this.inputHasFocus;
  }

  get showRetrieveData(){
    return this.showDataDropDown || this.selectedData?.length>0;
  }

  addItemToSelect(item: any, index: number){
    this.selectedData.unshift(item);
    this.filterData.splice(index, 1);
  }

  removeItemFromSelected(index: number, item: any){
    this.selectedData.splice(index, 1);
    this.filterData.push(item);
  }

  onInputFocus(){
    this.filterData = this.inputData;
    this.inputHasFocus = this.inputHasFocus == true ? false : true;
    this.showDataDropDown = true;
  }

  closeDropDown(){
    this.inputHasFocus = false;
    this.showDataDropDown = false;
  }

  onInputChange(ev: any){
    this.filterData = this.inputData.filter( data => data.name?.includes(ev.target.value));
  }
}
