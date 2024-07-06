import { Button } from '@/components/ui/button';
import { PATH } from '@/constant/paths';
import { useNavigate } from 'react-router-dom';

const Customizing = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="pt-24 flex flex-col gap-20 items-center">
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="font-bold text-4xl">Customizing</div>
          <div className="text-xl ">나만의 스타일로 세상에 하나뿐인 제품을 만들어 보세요</div>
        </div>
        <div className="flex justify-center items-center gap-6">
          <div className="flex flex-col items-center">
            <img className="w-50" src="/images/product_select_img.png" alt="product-select" />
            <div className="text-sm mt-9">✱ 제품 선택 ✱</div>
          </div>
          <img className="w-14 pb-12" src="/icons/arrow_icon.png" alt="arrow-icon" />
          <div className="flex flex-col items-center">
            <img className="w-50" src="/images/fabric_select_img.png" alt="product-select" />
            <div className="text-sm mt-9">✱ 원단 선택 ✱</div>
          </div>
          <img className="w-14  pb-12" src="/icons/arrow_icon.png" alt="arrow-icon" />
          <div className="flex flex-col items-center">
            <img className="w-50" src="/images/size_select_img.png" alt="size-select" />
            <div className="text-sm mt-9">✱ 사이즈 선택 ✱</div>
          </div>
          <img className="w-14  pb-12" src="/icons/arrow_icon.png" alt="arrow-icon" />
          <div className="flex flex-col items-center">
            <img className="w-50" src="/images/consult_img.png" alt="consult" />
            <div className="text-sm mt-9">✱ 견적 상담 ✱</div>
          </div>
        </div>
        <div className="bg-primary w-full h-48 flex justify-center items-center">
          <Button
            className="text-base font-bold text-center"
            size="lg"
            onClick={() => {
              navigate(PATH.customizing);
            }}
          >
            <span>Start</span>
            <span className="ml-2">➔</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Customizing;
