class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'wedsvv8t');
    const result = await fetch("https://api.cloudinary.com/v1_1/da2urge64/upload",
      {
        method: 'POST',
        body: data,
      }
    )
    return await result.json();
  }
}

export default ImageUploader;