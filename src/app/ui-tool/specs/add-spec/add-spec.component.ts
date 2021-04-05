import {Component, OnInit} from '@angular/core';
import {NbDialogRef} from "@nebular/theme";

@Component({
  selector: 'ngx-add-spec',
  templateUrl: './add-spec.component.html',
  styleUrls: ['./add-spec.component.css']
})
export class AddSpecComponent {
  constructor(protected ref: NbDialogRef<AddSpecComponent>) {
  }

  cancel() {
    this.ref.close();
  }

  submit(name) {
    this.ref.close(name);
  }

}
