import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface State {
  data?: [];
  toggled: boolean;
  count: number;
  maxClickCount: number;
}

@Injectable({
  providedIn: "root",
})
export class ToggleState {
  // initial state
  private initialState: State = {
    toggled: false,
    count: 0,
    maxClickCount: 5,
  };
  // reactive state
  state = new BehaviorSubject<State>(this.initialState);
  stateSource$ = this.state.asObservable();

  constructor() {}
  // set next state
  onNext(nextState: State) {
    this.state.next(nextState);
  }
  // get state for reset
  getinitialState(): State {
    return this.initialState;
  }
} //
