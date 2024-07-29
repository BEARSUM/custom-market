import { firebaseStorage } from '@/lib/firebase.ts';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

/**
 * 파이어베이스 storage에 이미지를 올리고 해당 이미지 이름과 url을 반환한다.
 */
export const uploadImage = async (file: File) => {
  if (!(file instanceof File)) {
    return;
  }

  try {
    const currentDate = new Date().toISOString();
    const uniqueFileName = `${currentDate}_${uuidv4()}.${file.name}`;
    console.log('uniqueFileName', uniqueFileName);

    const storageRef = ref(firebaseStorage, `images/${uniqueFileName}`);

    await uploadBytes(storageRef, file);

    const downloadURL = await getDownloadURL(storageRef);

    return { fileName: uniqueFileName, imageUrl: downloadURL };
  } catch (error) {
    console.error(error);
  }
};
