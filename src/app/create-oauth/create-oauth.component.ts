import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-oauth',
  templateUrl: './create-oauth.component.html',
  styleUrls: ['./create-oauth.component.scss'],
})
export class CreateOauthComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateOauthComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    clientId: new FormControl('', [Validators.required]),
    clientSecret: new FormControl('', [Validators.required]),
    redirectUrls: new FormControl('', [Validators.required]),
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
