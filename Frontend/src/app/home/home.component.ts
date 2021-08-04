import { Component, OnInit } from '@angular/core';

import { PreorderService } from '../preorder.service';
import { Restaurant } from '../Models/Restaurant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rests : Restaurant[];
  rest : any ;

  constructor(private ps : PreorderService ) { }

  ngOnInit(): void {
      this.ps.ShowAll().subscribe((data: Restaurant[]) => {
        this.rests=data;
       
      });
  }
  FindRest(SearchInput : string){
    this.ps.SearchRest(SearchInput).subscribe((data : Restaurant[])=>{
      this.rests = data;
    });
  }

}
