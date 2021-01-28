import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {

  public mainForm: FormGroup = new FormGroup({
    date: new FormControl('',  [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(45) ]),
    address: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(45) ]),
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
     const today = new Date().toISOString().split('T')[0];
     this.date?.setValue(today);
  }

  get date(): AbstractControl
  {
    return this.mainForm.get('date');
  }
  get name(): AbstractControl{
    return this.mainForm.get('name');
  }

  get address(): AbstractControl {
    return this.mainForm.get('address');
  }

  goToCustomersPage(): void
  {
    this.router.navigate(['customers']);
  }

  createNewCustomer(): void
  {
    console.log(this.mainForm.value);
  }

}
