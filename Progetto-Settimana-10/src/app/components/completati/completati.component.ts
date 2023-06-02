import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {

  taskCompletate: Todo[] = []; //array di task completate
  messaggioRecuperoTask: boolean = false; // messaggio di ricerca task
  constructor(private taskService: TodosService) {}

//metodo al caricamento della pagina
 //metodo al caricamento della pagina
 ngOnInit() {
  this.messaggioRecuperoTask=true//abilito messaggio di ricerca task
  setTimeout(() => {
    this.messaggioRecuperoTask=false//disabilito messaggio di ricerca task
  this.taskCompletate = this.taskService.gettaskCompletate();
}, 2000);
}


  //metodo per cancellare le task completate
  cancellaTask(task: Todo) {
    setTimeout(() => {
    this.taskService.cancellaTaskCompletate(task);

  }, 2000);
  }

}



