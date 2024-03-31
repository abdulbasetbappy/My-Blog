<template>
    <div class="p-fileupload p-component">
      <div class="dropzone" :class="{ 'dragover': isDragOver }" @dragover.prevent="onDragOver" @dragleave="onDragLeave" @drop.prevent="onDrop">
        <i class="pi pi-upload"></i>
        <input type="file" ref="fileInput" class="p-hidden-accessible" :multiple="multiple" :accept="accept" @change="onFileSelect($event)" />
        <span>Drag and drop images here or click to upload</span>
      </div>
      <ul class="file-list">
        <li v-for="(file, index) in files" :key="index" class="file-item">
          <span class="file-name">{{ file.name }}</span>
          <button @click="removeFile(index)" class="p-button p-button-text p-button-rounded p-button-danger p-fileupload-remove">
            <i class="pi pi-times"></i>
          </button>
        </li>
      </ul>
      <div v-if="uploadedImages.length > 0" class="uploaded-images">
        <h3>Uploaded Images</h3>
        <img v-for="(image, index) in uploadedImages" :key="index" :src="image" class="uploaded-image" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PrimeVueFileUpload',
    props: {
      multiple: {
        type: Boolean,
        default: false
      },
      accept: {
        type: String,
        default: 'image/*' // Accepts only image files
      }
    },
    data() {
      return {
        files: [],
        isDragOver: false,
        uploadedImages: [] // Store uploaded image URLs
      };
    },
    methods: {
      onFileSelect(event) {
        const selectedFiles = event.target.files;
        this.addFiles(selectedFiles);
      },
      addFiles(files) {
        for (let i = 0; i < files.length; i++) {
          this.files.push(files[i]);
          this.uploadFile(files[i]); // Upload each file
        }
      },
      removeFile(index) {
        this.files.splice(index, 1);
      },
      onDragOver(event) {
        event.preventDefault();
        this.isDragOver = true;
      },
      onDragLeave(event) {
        event.preventDefault();
        this.isDragOver = false;
      },
      onDrop(event) {
        event.preventDefault();
        this.isDragOver = false;
        const droppedFiles = event.dataTransfer.files;
        this.addFiles(droppedFiles);
      },
      uploadFile(file) {
        // Simulated upload process (replace with actual upload logic)
        setTimeout(() => {
          // Push the uploaded image URL to the array
          this.uploadedImages.push(URL.createObjectURL(file));
        }, 1000);
      }
    }
  };
  </script>
  
  <style scoped>
  .p-fileupload {
    display: flex;
    flex-direction: column;
  }
  
  .dropzone {
    border: 2px dashed #ccc;
    padding: 20px;
    text-align: center;
    cursor: pointer;
  }
  
  .dragover {
    border-color: #007bff;
  }
  
  .file-list {
    list-style-type: none;
    padding: 0;
  }
  
  .file-item {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  
  .file-name {
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-right: 10px;
  }
  
  .p-button {
    cursor: pointer;
  }
  
  .uploaded-images {
    margin-top: 20px;
  }
  
  .uploaded-image {
    max-width: 200px;
    max-height: 200px;
    margin-right: 10px;
  }
  </style>
  