import { OnInit, EventEmitter, AfterViewInit, ElementRef } from '@angular/core';
import { MdsDatetimePickerCoreComponent } from './core/mds-datetime-picker-core.component';
import { IDate } from '../assests/date.interface';
import { IRangeDate } from '../assests/rangeDate.interface';
import { TemplateTypeEnum } from "../assests/TemplateTypeEnum";
export declare class MdsDatetimePickerComponent implements OnInit, AfterViewInit {
    private element;
    constructor(element: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    mdsDateTimePickerCore: MdsDatetimePickerCoreComponent;
    templateType: TemplateTypeEnum;
    initialValue: string;
    inLine: boolean;
    persianChar: boolean;
    rangeSelector: boolean;
    isPersian: boolean;
    timePicker: boolean;
    enableAnimation: boolean;
    placeHolder: string;
    format: string;
    selectedDateString: string;
    readonly getTopOffset: string;
    readonly getLeftOffset: string;
    private topOffset;
    private leftOffset;
    private showDatePicker;
    private afterViewInit;
    private alreadyShowDatePickerClicked;
    private oldDateValue;
    dateChanged: EventEmitter<IDate>;
    rangeDateChanged: EventEmitter<IRangeDate>;
    dateChangedHandler(date: IDate): void;
    rangeDateChangedHandler(rangeDate: IRangeDate): void;
    showDatePickerButtonClicked(): void;
    dateTimeTextBoxOnFocus(event: any): void;
    dateTimeTextBoxOnBlur(event: any): void;
}
