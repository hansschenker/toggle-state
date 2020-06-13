import { Component } from "@angular/core";
import { Observable } from "rxjs";
// toggle state handling
import { ToggleState, State } from "./toggle.state";

@Component({
  selector: "hs-toggle",
  template: `
    <div *ngIf="vm$ | async as vm">
      <pre> {{ vm | json }} </pre>
      <h3>Toggle State</h3>
      <h3></h3>
      <p>
        <button [disabled]="vm.count == vm.maxClickCount" (click)="onToggle()">
          Toggle State
        </button>
      </p>
      <p><button (click)="onReset()">Reset</button></p>
    </div>
  `,
  styles: [],
})
export class ToggleComponent {
  // component state
  initialState = { ...this.svc.getinitialState() };
  state: State;
  // service state
  vm$: Observable<State>;

  constructor(private svc: ToggleState) {
    this.vm$ = this.svc.stateSource$;
    this.state = { ...this.initialState };
  }

  onToggle() {
    this.state.toggled = !this.state.toggled;
    this.state.count++;

    this.svc.onNext(this.state);
  }
  onReset() {
    this.initialState = { ...this.svc.getinitialState() };
    console.log("initial state:", this.initialState);
    this.state = { ...this.initialState };
    console.log("state", this.state);
    this.svc.onNext(this.state);
  }
} //
