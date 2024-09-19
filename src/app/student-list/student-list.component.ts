import { Component, Input } from '@angular/core';
// L'interfaccia è solo un modello, non sono
// i dati. 
// Servono a fornire all'utilizzatore di
// questo componente le regole del suo utilizzo
import { Student } from '../model/students';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

  // in questo modo il dato gli viene passato
  // non c'è lo ha più lui di scaffholding
  // Togliamo alla lista la responsabilità
  // di gestire i dati.
  //1) Gli arrivano in input perchè devo assegnarlo
  // al componente che gestisce sia la 'form'
  // che la 'list', nel nostro caso
  // è 'students.component'
  @Input() studentList!: Student [];
  


}
