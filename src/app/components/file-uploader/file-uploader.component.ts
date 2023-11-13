import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  handleFileInput(inputElement: any): void {
    const files = inputElement.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      console.log('Selected File:', selectedFile);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDragEnter(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.handleFileInput(this.fileInput.nativeElement);
    }
  }

}
