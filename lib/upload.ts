import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  secure: true,
});

export function uploadImage(image: File, tag?: string): Promise<{ public_id: string; url: string }> {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream({ folder: 'medilink', tags: tag }, function (err, image) {
      if (err) {
        reject(err);
      }
      if (image) {
        resolve({ public_id: image?.public_id, url: image?.url });
      }
    });

    const reader = image.stream().getReader();
    reader
      .read()
      .then(function streamImage({ done, value }): any {
        if (done) {
          uploadStream.end();
          return;
        }
        uploadStream.write(value);
        return reader.read().then(streamImage);
      })
      .catch(reject);
  });
}
