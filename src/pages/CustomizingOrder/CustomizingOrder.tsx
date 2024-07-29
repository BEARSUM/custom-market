import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { QuillEditor } from '@/components/QuillEditor';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { SelectAccordion } from '@/components/SelectAccordion';
import { Input } from '@/components/ui/input';
import { customOrderDataCleansing } from './utils/cleansing';
import { useRef } from 'react';

//임시데이터
const data = [
  { id: 0, name: '산딸기 베리베리', imageUrl: '/icons/cart_icon.svg' },
  { id: 1, name: 'dd', imageUrl: '/icons/cart_icon.svg' },
  { id: 1, name: 'dd', imageUrl: '/icons/cart_icon.svg' },
  { id: 1, name: 'dd', imageUrl: '/icons/cart_icon.svg' },
  { id: 1, name: 'dd', imageUrl: '/icons/cart_icon.svg' },
  { id: 1, name: 'dd', imageUrl: '/icons/cart_icon.svg' },
];
/**
 * @todo 원단, 부자재 데이터페칭, 폼 에러처리, 타입 분리
 */
export type TImage = { image: File; imageUrl: string };

const CustomizingOrder = () => {
  const method = useForm<{ images: TImage[] }>({
    defaultValues: { images: [] },
  });

  const { handleSubmit: submit, getValues, control } = method;

  const { fields, append, remove } = useFieldArray({ control, name: 'images' });

  const uploadRef = useRef<HTMLInputElement>(null);
  const handleUploadRef = () => {
    uploadRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files = [] } = e.target;

    if (files && files.length > 0) {
      Array.from(files).forEach((file) => {
        const imageUrl = URL.createObjectURL(file);

        append({ image: file, imageUrl: imageUrl });
      });
    }
  };

  const handleSubmit = submit(async () => {
    const orderParams = await customOrderDataCleansing(getValues());
    console.log('orderParams', orderParams);
  });

  return (
    <div className="px-20 py-20 flex flex-col items-center">
      <div className="border-b border-foreground py-1 text-sm mb-10">주문하기</div>
      <div className="w-full">
        <FormProvider {...method}>
          <div className="flex flex-col ">
            {/* 원단 */}
            <div className="w-full">
              <SelectAccordion triggerName="원단 선택" itemList={data} />
            </div>
            {/* 부자재 */}
            <div className="w-full">
              <SelectAccordion triggerName="부자재 선택" itemList={data} />
            </div>
            {/* 상세 디자인 */}
            <div className="h-72 mb-10 flex flex-col">
              <Label htmlFor="quill-editor" className=" p-4">
                상세 디자인
              </Label>
              <QuillEditor modules={modules} placeholder="부가적인 설명이 필요한 경우에만 작성해 주세요." />
            </div>
            {/* 이미지 */}
            <div className="flex items-center gap-2">
              <div>
                <Button variant="outline" type="button" size="sm" onClick={handleUploadRef}>
                  이미지 첨부
                </Button>
                <Input
                  ref={uploadRef}
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*"
                  type="file"
                  multiple
                />
              </div>
              <div className="flex gap-2">
                {' '}
                {fields.map(({ image, id }, index) => (
                  <div key={id} className="">
                    <span className="underline">{image.name}</span>
                    <Button variant="ghost" type="button" className="px-2" onClick={() => remove(index)}>
                      x
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <Button size="lg" type="submit" onClick={handleSubmit}>
              주문하기
            </Button>
          </div>
        </FormProvider>
      </div>
    </div>
  );
};

/**
 * QuillEditor 모듈 설정
 */
const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ color: [] }, { background: [] }],
      [{ align: [] }, 'link'],
    ],
  },
};

export default CustomizingOrder;
