import { Component, Input } from '@angular/core';
import { Student } from '../model/students';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent {
  // Nei casi di valori input (inizialmente
  // questa proprietà sarà sempre sprovvista
  // di valore) possiamo decidere di usare
  // il 'bang operator'( ! ) per indicare a 
  // TS che questa proprietà avrà sempre,
  // in qualche modo un valore.
  // Anche se a livello di classe la proprietà
  // sembra non assumere mai un valore concreto
  // in realtà verrà passato un valore tramite @Input
  // grazie ad Angular
  @Input() student!: Student;

  prova: string;
  prova2: string = "Sara";
  // il ? indica un valore che può essere undefined
  prova3?: string;  
  // il ! indica un valore che puo essere nullable
  prova4!: string;

  constructor() {
    this.prova = 'Mario'
  }

  test() {
    // QUI in TS non ci avverte del potenziale 'undefined'
    // perchè abbiamo marcato la proprietà con il !
    console.log(this.prova4.split(' '));
  }

  // Sfruttiamo un metodo per restituire
  // il valore calcolato tramite i dati 
  // in nostro possesso
  // Questo  ':number'  vuole dire che questo
  // metodo deve restituire un numero, altrimenti
  // darà errore
  // Se non mettiamo il tipo, questo verrà
  // dedotto dal tipo di 'return'
  media(): number{
    // return this.student.ita +  this.student.mate ...
    
    // Altrimenti possiamo prendere queste proprietà
    // per il calcolo tramite la 'destructure' (scomporre
    // l'oggetto) e sarebbe in questo modo:
    const { ita, mate, ing, info: informatica } = this.student;
    // sembra di assegnare un valore ad un oggetto
    // ma in realtà, quando vedete le {} vuol dire
    // che stiamo scomponendo l'oggetto, andando
    // a recuperare le proprietà che ci interessano
    // per l'operazione che ci interessa eseguire

    return (ita + mate + ing + informatica) / 4;
    // possiamo anche cambiare nome alla proprietà
    // da richiamare, a riga 53, info lo trasformiamo
    // in 'informatica'
  }

  // FATE poi il metodo 'esito'
  // E promosso quando la media e maggiore
  // o uguale del 6, altrimenti e bocciato

}
