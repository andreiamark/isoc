import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PopUpAddRestaurantComponent } from '../pop-up-add-restaurant/pop-up-add-restaurant.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.scss'
})
export class RestaurantsComponent {

  restaurantForm: FormGroup;

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.restaurantForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      image: ['', Validators.required] // Modify according to your needs
    });
  }

  openAddRestaurantPopup(): void {
    const dialogRef = this.dialog.open(PopUpAddRestaurantComponent, {
      width: '600px' // Adjust width as per your design
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
      // Optionally, handle result after closing the popup
    });
  }

  onSubmit(): void {
    if (this.restaurantForm.valid) {
      // Process form submission logic here (e.g., save data to backend)
      console.log(this.restaurantForm.value);
      // Close the dialog after successful submission
      this.dialog.closeAll();
    }
  }
}
