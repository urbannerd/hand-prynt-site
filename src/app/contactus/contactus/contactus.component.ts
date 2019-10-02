import { Component, OnInit } from '@angular/core';
import { SubmitterService } from 'src/app/submitter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private _service: SubmitterService, private router: Router) { }

  ngOnInit() {
  }

  contactUsForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit(){
    this._service.postData(this.contactUsForm).subscribe(
      data => {
        alert('Thanks for submitting :)');
        console.log(data);
        this.router.navigate(['']);
      },
      error => {
        alert('Error happened');
        console.log(error);
      }
      );
    }

}
