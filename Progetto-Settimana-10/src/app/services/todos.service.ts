import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private tasks: Todo[] = []; //array di task
  private taskCompletate: Todo[] = []; //array di task completate

  // metodo per caricare le task
  getTasks(): Todo[] {
    return this.tasks;
  }
  //metodo per aggiungere le task
  addTask(newTask: Todo): void {
    this.tasks.push(newTask);
  }

  //metodo per spostare le task da un array all altro
  spostaCompletati(task: Todo): void {
    const index = this.tasks.findIndex((i) => i.id === task.id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      this.taskCompletate.push(task);
    }
  }
//metodo per caricare le task completate
  gettaskCompletate(): Todo[] {
    return this.taskCompletate;
  }
//metodo per cancellare le task da completare
  cancellaTask(task: Todo): void {
    const index = this.tasks.findIndex((t) => t.id === task.id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
//metodo per cancellare le task completate
  cancellaTaskCompletate(task: Todo): void {
    const index = this.taskCompletate.findIndex((t) => t.id === task.id);
    if (index !== -1) {
      this.taskCompletate.splice(index, 1);
    }
  }
}
