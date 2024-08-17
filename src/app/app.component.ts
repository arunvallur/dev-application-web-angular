import { Component } from '@angular/core';
import { SignalRService } from './signalrservice';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dev-application-web';
  constructor(private signalRService: SignalRService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    // this.signalRService.startConnection();
    this.signalRService.addNotificationListener((message: string) => {
      this.snackBar.open(message, 'Close', {
        duration: 5000,
        horizontalPosition: 'start',
        verticalPosition: 'top',
        panelClass: ['custom-snackbar']
      });
    });
  }
}
