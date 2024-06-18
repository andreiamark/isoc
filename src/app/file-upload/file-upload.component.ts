// file-upload.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  standalone: true,
  imports: [CommonModule]


})
export class FileUploadComponent {
  imageUrl!: string;
  selectedFile!: File;

  constructor(private uploadService: UserService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  onUpload() {
    if (!this.selectedFile) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('image', this.selectedFile, this.selectedFile.name);

    this.uploadService.uploadFile(formData).subscribe(
      (response: any) => {
        this.imageUrl = response.url;
      },
      (error) => {
        console.error('Error uploading file', error);
      }
    );
  }
  }

