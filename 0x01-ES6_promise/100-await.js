import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const data = {};
  try {
    const ph = await uploadPhoto();
    const er = await createUser();
    data.photo = ph;
    data.user = er;
  } catch (error) {
    data.photo = null;
    data.user = null;
  }

  return data;
}
