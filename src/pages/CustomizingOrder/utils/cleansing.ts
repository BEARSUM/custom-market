import { uploadImage } from '@/utils/uploadImage';
import { TImage } from '../CustomizingOrder';

/**
 * @todo 다른 데이터 포맷팅 추가, 타입 분리
 */

/**
 * 커스텀 주문 등록 fetch 파라미터를 포맷팅한다.
 */
export const customOrderDataCleansing = async (data: { images: TImage[] }) => {
  const { images, ...rest } = data;

  const cleansingImages = Promise.all(
    images.map(async (image) => {
      if (image.image instanceof File) {
        const uploadedImage = await uploadImage(image.image);

        return { ...uploadedImage };
      }
      return { ...image };
    }),
  );
  return cleansingImages;
};
