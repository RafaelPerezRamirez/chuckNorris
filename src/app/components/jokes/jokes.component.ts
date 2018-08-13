import { Component, OnInit } from '@angular/core';
import { JokesService } from '../../services/jokes.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
    jokes:any;
    jokeSimple:any;
    constructor( private _jservice:JokesService ){}
    ngOnInit() {
        this._jservice.getjokes().subscribe( jokes=>{
            this.jokes = jokes;
        })
    }
    getJoke(category, event){
        this._jservice.getjoke(category).subscribe( joke =>{
            this.jokeSimple = joke;
        });
    }
}
