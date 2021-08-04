import { Component, OnInit } from '@angular/core';
import { PreorderService } from '../preorder.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Globals } from '../globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {
  angForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private ps : PreorderService,
    private gl: Globals,
    private router:Router
  ) { 
    this.createForm();
  }
  createForm(){
    this.angForm = this.fb.group({
      fname:['',Validators.required],
      lname:['',Validators.required],
    //  MemberAge:['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  getInfo(fname: string, lname: string, email: string, contact: string) {
  //  alert(fname);
    var element = <HTMLInputElement>  document.querySelector('input[name="orderType"]:checked');
    var ordertype = element.value; 
    this.ps.saveClient(fname,lname,email,contact,ordertype,this.gl.cartItems,this.gl.restId);
    var name = fname + " " + lname
    this.router.navigate(['finalpage'],{ queryParams: { name: name } });
   // console.log(this.gl.cartItems)
    
  }

}
