import { Component } from "@angular/core";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent {
  label: string = "Call Server"
  isLoading: boolean = true;

  constructor() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  getStatus() {
    return { 
      'btn-primary': !this.isLoading,
      'btn-light' : this.isLoading
    }
  }

  onCallServer(event:any) {   
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}