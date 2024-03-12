
import { Component } from '@angular/core';

@Component({
  selector: 'app-if',
  standalone: true,
  imports: [],
  template: `
    @if (connectedUser) {
      <div>
        <p>old if</p>
      </div>
    } @else {
      <p>old else</p>
    }
    @if (!connectedUser) {
      <div class="alert alert-danger">Merci de vous connectez</div>
    }
    @else if (!connectedUser.activated) {
    <div class="alert alert-warning">
      Hello {{ connectedUser.name }}, merci d'activer votre compte
    </div>
    } @else {
      <div class="alert alert-success">Hello {{ connectedUser.name }}</div>
    }
    `,
})
export class IfComponent {
  connectedUser: null | { name: string; email: string; activated: boolean } =
    null;
  constructor() {
    setTimeout(() => {
      this.connectedUser = { name: 'aymen', email: 'email', activated: false };
    }, 1500);
    setTimeout(() => {
      this.connectedUser = { name: 'aymen', email: 'email', activated: true };
    }, 3000);
  }
}
