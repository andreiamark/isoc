import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-add-restaurant',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pop-up-add-restaurant.component.html',
  styleUrl: './pop-up-add-restaurant.component.scss'
})
export class PopUpAddRestaurantComponent {
  restaurantForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PopUpAddRestaurantComponent> // Inject MatDialogRef
  ) {
    this.restaurantForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      image: ['', Validators.required] // Modify according to your needs
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.restaurantForm.valid) {
      // Process form submission logic here (e.g., save data to backend)
      console.log(this.restaurantForm.value);
      // Optionally, send data back to parent component using MatDialogRef
      this.dialogRef.close(this.restaurantForm.value);
    }
  }

  closePopup(): void {
    this.dialogRef.close(); // Close the dialog without passing any data
  }
}
