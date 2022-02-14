import { Component, OnInit } from '@angular/core';
//form builder funciona como un servicio
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { debounceTime } from 'rxjs';
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  form!: FormGroup;

  constructor(
   private formBuilder : FormBuilder
  ) {
    //ejecutamos el método
    this.buildForm();
   }

  ngOnInit(): void {
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      date:['', [Validators.required]],
      email: ['', [Validators.email]],
      text: ['', [Validators.maxLength(200)]],
      category: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
    /*
    this.form.valueChanges
    //para cuando el usuario tiene tiempo de actividad...
    .pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      console.log(value);
    });
    */
  }
  save(event: Event) {
    //para que no se recargue toda la página
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    }

  }
  get emailField(){
    return this.form.get('email');
  }
  get textField (){
    return this.form.get('text');
  }
}
