import { Component, OnInit } from '@angular/core';
import { AuthData } from 'src/app/auth/auth-data.interface';
import { AuthService } from 'src/app/auth/auth.service';
import { interval } from 'rxjs';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: AuthData | null = null;
  constructor(private authService: AuthService) { }
  sessionDuration: string | null = null;
  ngOnInit(): void {
    //RECUPERO DATI UTENTE
      const userString = localStorage.getItem('user');
      if (userString) {
        this.user = JSON.parse(userString);
        this.calculateSessionDuration();
      }

//AGGIUNGO TEMPO REALE CHE SI AGGIORNA OGNI SECONDO (interval rxjs)
      interval(1000).subscribe(() => {
        if (this.user) {
          this.calculateSessionDuration();
        }
      });
    }

//CALCOLO DURATA SESSIONE
    calculateSessionDuration() {
      const currentTime = new Date().getTime();
      const sessionTime = currentTime - this.user!.timestamp;
      const minuti = Math.floor(sessionTime / 60000);
      const secondi = Math.floor((sessionTime % 60000) / 1000);
      this.sessionDuration = `${minuti} min ${secondi} sec`;
    }



}
