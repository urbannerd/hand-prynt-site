import { Component, OnInit } from '@angular/core';
import { SubmitterService } from 'src/app/submitter.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private _service: SubmitterService) { }

  ngOnInit() {
  }

  contactUsForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit(testForm:NgForm){
    this._service.postData(this.contactUsForm).subscribe(
      data => {
        testForm.form.reset();
        this.contactUsForm.email='';
        this.contactUsForm.message='';
        this.contactUsForm.name='';
        this.contactUsForm.subject='';
        

        let alert = document.querySelector('.alert').classList.add('alertShowed');
        console.log(data);
        
        setTimeout(() => {
          let alert = document.querySelector('.alert').classList.remove('alertShowed');
          window.location.href = '';
        }, 3000);
      },
      error => {
        alert('Error happened');
        console.log(error);
      }
      );
    }

}
