import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  provideHttpClient } from '@angular/common/http'; // Ensure correct import
import { UserService } from './user.service';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { MatDialogModule } from '@angular/material/dialog'; // Import MatDialogModule



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDropzoneModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    MatDialogModule 
  
  ],
  providers: [provideHttpClient(), UserService],
  bootstrap: [],
  exports:[UserService]
})
export class AppModule { }
