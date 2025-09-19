import { Component } from '@angular/core';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { Directive, HostBinding, HostListener, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [NgxDropzoneModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {
  files: File[] = [];

  onSelect(event: { addedFiles: File[] }): void {
    console.log(event);
    this.files.push(...event.addedFiles);
    const files = event.addedFiles;

  }

  onRemove(event: File): void {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  @HostBinding('class.fileover') fileOver: boolean = false;
  @Output() fileDropped = new EventEmitter<any>();

  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true;
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
  }

  // Drop listener
  @HostListener('drop', ['$event']) public ondrop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    const files = evt.dataTransfer?.files;
    if (files && files.length > 0) {
      this.fileDropped.emit(files);
    }
  }
}
