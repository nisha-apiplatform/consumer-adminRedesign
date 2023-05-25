import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-hmac-auth',
  templateUrl: './create-hmac-auth.component.html',
  styleUrls: ['./create-hmac-auth.component.scss'],
})
export class CreateHmacAuthComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateHmacAuthComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    secret: new FormControl('', [Validators.required]),
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
