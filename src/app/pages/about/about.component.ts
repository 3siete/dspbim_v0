import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  members = [
    {
      imgURL:'',
      job:'arq.',
      name:'Pojmaevich Nicolas',
      scr:''
    },
    {
      imgURL:'',
      job:'arq.',
      name:'Sonzogni Jhoana',
      scr:''
    },
    {
      imgURL:'',
      job:'arq.',
      name:'Pojmaevich Nicolas',
      scr:''
    }
  ]
}
