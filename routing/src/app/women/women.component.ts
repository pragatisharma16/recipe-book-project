import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Component, OnInit } from '@angular/core';
import { RoutingserviceService } from '../routingservice.service';
import { Form } from '../form';


@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {
loginForm: FormGroup;
  showBank = true;
  submitted = false;


  constructor(private _RoutingserviceService: RoutingserviceService) { }
  // get f() { return this.loginForm.controls; }
  ngOnInit() {

  }

  // convenience getter for easy access to form fields
  // get f() { return this.loginForm.controls; }
userModel = new Form('','','');


onSubmit(){
  this._RoutingserviceService.getData(this.userModel)
  .subscribe(
    data =>console.log('success',data),
    error =>console.log('error',error)

  )
}

}
