import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToggleComponent } from "./toggle.component";
import { ToggleState } from "./toggle.state";

@NgModule({
  declarations: [ToggleComponent],
  exports: [ToggleComponent],
  providers: [ToggleState],
  imports: [CommonModule],
})
export class ToggleModule {}
