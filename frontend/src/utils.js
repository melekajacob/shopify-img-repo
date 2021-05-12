export const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    if (!file) {
      resolve(null);
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const replacePathParams = (path, mappings) => {
  for (const param in mappings) {
    path = path.replace(`{${param}}`, mappings[param]);
  }

  return path;
};
