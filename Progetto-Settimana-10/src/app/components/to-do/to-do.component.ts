import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent implements OnInit {
  tasks: Todo[] = []; //array di task
  taskCompletate: Todo[] = []; //array di task completate
  taskNuove: string = ''; //task aggiunte
  messaggioNoTask: boolean = false; //messaggio no task disabilitato
  aggiuntaTask: boolean = false; // messaggio di aggiunta task disabilitato
  messaggioRecuperoTask: boolean = false; // messaggio di ricerca task
  constructor(private taskService: TodosService) {}
  //metodo al caricamento della pagina
  ngOnInit() {
    this.messaggioRecuperoTask=true //abilito messaggio di ricerca task
    setTimeout(() => {
      this.tasks = this.taskService.getTasks();
      this.messaggioRecuperoTask=false //disabilito messaggio di ricerca task
      this.messaggioNoTask = this.tasks.length === 0; //abilito messaggio no task se non ne trovo
    }, 2000);
  }
  //metodo per aggiungere task
  addTask() {
    this.aggiuntaTask = true; // messaggio che carica la task
    this.messaggioNoTask = false; //tolgo il messaggio quando aggiungo la task
    setTimeout(() => {
      const newTask: Todo = {//creo oggetto della nuova task
        id:this.tasks.length+1, // (metodo alternativo) Date.now()
        title: this.taskNuove,

      };

      this.taskService.addTask(newTask);
      this.taskNuove = '';
      this.messaggioNoTask = false; // tolgo il messaggio no task quando aggiungo la task
      this.aggiuntaTask = false; // tolgo messaggio dell'aggiunta task quando l'aggiungo
    }, 2000);
    console.log(this.taskNuove)
  }
  //metodo per spostare le task da un array all altro
  spostaCompletati(task: Todo) {
    setTimeout(() => {
      this.taskService.spostaCompletati(task);
      this.messaggioNoTask = this.tasks.length === 0; //messaggio no task se sposto tutti i task in completati
    }, 2000);
  }


   // metodo per cancellare una task
   cancellaTask(task: Todo) {
    setTimeout(() => {
    this.taskService.cancellaTask(task);
    this.messaggioNoTask = this.tasks.length === 0; // abilito messaggio no task se non ne trovo
  }, 2000);
  }

}
