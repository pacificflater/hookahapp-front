import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private snackBar: MatSnackBar) {}

  messages: string[] = [];

  add(message:string) {
    // this.messages.push(message);
    this.snackBar.open(`${message}`, 'Close', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "bottom"
    })
  }
  clear(){
    this.messages = [];
  }

}
