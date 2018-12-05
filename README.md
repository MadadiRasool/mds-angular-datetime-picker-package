# Mds Angular 6+, Bootstrap 4+ Persian and Gregorian DateTimePicker
Persian and gregorian DateTimePicker with `Angular 6+` and `AngularMaterials 6+` and `Bootstrap 4+`

Installing package via npm:
```
npm install mds.angular.datetimepicker@latest
```

[Demo](https://mds92.github.io/MdsDateTimePickerSample/sample/)

------------------------------------------

![Mds Angular Persian and Gregorian DateTimePicker](https://raw.githubusercontent.com/Mds92/Mds92.github.io/master/MdsDateTimePickerSample/images/Angular-Persian-Date-Time-Picker-1.jpg)
![Mds Angular Persian and Gregorian DateTimePicker](https://raw.githubusercontent.com/Mds92/Mds92.github.io/master/MdsDateTimePickerSample/images/Angular-Persian-Date-Time-Picker-2.jpg)

------------------------------------------
## How To Use:
1. First add `import` to your module,
```javascript
import { MdsAngularPersianDateTimePickerModule } from 'mds.angular.datetimepicker';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MdsAngularPersianDateTimePickerModule],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
```
2. Install Requirements:
You can install these packages as follows:
```
npm install mds.persian.datetime
npm install @angular/material @angular/cdk
npm install @angular/animations
npm install jquery
npm install popper.js
npm install bootstrap
```
**Guidance:**
You can add bootstrap and jquery to your angular 6+ project as follows:
Open `angular.json`
add these lines
```json
 "styles": [
    "node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.css"
  ],
  "scripts": [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/popper.js/dist/umd/popper.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js"
  ]
```

3. Add to view:
```html
    <mds-angular-persian-datetimepicker [(ngModel)]="mdsDateTimePickerObject"
      [inLine]="false" [placeHolder]="'Mds DateTime Picker'"> 
    </mds-angular-persian-datetimepicker>
```

------------------------------------------

## Options

| Name        | Type           | Values            | Description  |
--------------|----------------|-------------------|--------------|
**isPersian** | boolean | true, [false] | Is date time picker persian or gregorian
**timePicker** | boolean | true, [false] | Is time picker enable
**templateType** | Enumeration | 1, [2] | You can choose how your date time picker generate<br>In materials you have animations<br> 1 = bootstrap <br> 2 = material
**inLine** | boolean | false, [true] | Show date time picker as in line in page
**textBoxType** | Enumeration | 1, [2] | If you choose `[inLine]="false"` it shows a textbox as picker<br>You can choose how should it shows <br> 1 = withButton <br> 2 = withoutButton
**placeHolder** | string | | Place holder of text box
**buttonIcon** | string | | Icon of datepicker button<br>Sample:<br> `<span class="fa fa-calendar" aria-hidden="true"></span>` <br> Default is 📅<br>
**rangeSelector** | boolean | false, [true] | Is date picker range selector
**format** | string | format string | Format of showing date time <br> فرمت پیش فرض 1393/09/14   13:49:40 <br> **yyyy**: سال چهار رقمی <br> **yy**: سال دو رقمی <br> **MMMM**: نام ماه <br> **MM**: عدد دو رقمی ماه <br> **dddd**: نام روز هفته <br> **dd**: عدد دو رقمی روز ماه <br> **d**: عدد یک رقمی روز ماه <br> **HH**: ساعت دو رقمی با فرمت 00 تا 24 <br> **hh**: ساعت دو رقمی با فرمت 00 تا 12 <br> **mm**: عدد دو رقمی دقیقه <br> **ss**: ثانیه دو رقمی <br> **fff**: میلی ثانیه 3 رقمی <br> **ff**: میلی ثانیه 2 رقمی <br> **tt**: ب.ظ یا ق.ظ <br> 

------------------------------------------

## Events

| Name        | Description  |
--------------|--------------|
**dateChanged(date: IMdsAngularDateTimePickerDate)** | Occurs whenever selected date change
**rangeDateChanged(rangeDate: IMdsAngularDateTimePickerRangeDate)** | Occurs whenever selected range date change
**keyDown(event: IEventModel)** | Occurs whenever keydown event fires on datepicker text box
**blur(event: IEventModel)** | Occurs whenever blur event fires on datepicker text box
**focus(event: IEventModel)** | Occurs whenever focus event fires on datepicker text box

#### Sample

```html
<mds-angular-persian-datetimepicker (dateChanged)="mdsDatePicker2OnDateChange($event)" (rangeDateChanged)="mdsDatePicker1OnDateRangeChange($event)"  [isPersian]="false" [templateType]="1" [rangeSelector]="true">
</mds-angular-persian-datetimepicker>
```

https://github.com/Mds92/Mds92.github.io/tree/master/MdsDateTimePickerSample
