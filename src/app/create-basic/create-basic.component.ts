import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-basic',
  templateUrl: './create-basic.component.html',
  styleUrls: ['./create-basic.component.scss'],
})
export class CreateBasicComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateBasicComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    // TODO : add  logic
    this.dialogRef.close(this.form.value);
  }

  onTest(): void {
    // TODO : add test logic
  }
}
