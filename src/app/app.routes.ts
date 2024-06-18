import { Routes } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { UserFormComponent } from './user-form/user-form.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

export const routes: Routes = [
    { path: '', redirectTo: '/user-form', pathMatch: 'full' }, // Optional default route
    { path: 'user-form', component: UserFormComponent },
    { path: 'file-upload', component: RestaurantsComponent },
    // Add other routes as needed
  ];