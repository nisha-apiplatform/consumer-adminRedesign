import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-api-key',
  templateUrl: './create-api-key.component.html',
  styleUrls: ['./create-api-key.component.scss'],
})
export class CreateApiKeyComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateApiKeyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  form = new FormGroup({
    key: new FormControl('', [Validators.required]),
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
