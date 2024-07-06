import { Button } from '@/components/ui/button';
import { PATH } from '@/constant/paths';
import { useNavigate } from 'react-router-dom';

/**
 * @todo best item data(상품이미지, 상품명, 가격) fetch api
 */

const BestItemList = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="py-24 flex flex-col gap-20 items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="font-bold text-4xl mb-20">Best of the week</div>
          <ul className="flex gap-10">
            <li>
              <img className="w-56 h-80" src="/images/product_img.png" alt="best-product" />
              <div className="flex flex-col gap-2 items-center mt-4 text-sm">
                <div>상품명</div>
                <div className="text-gray-400">1,0000원</div>
              </div>
            </li>
            <li>
              <img className="w-56 h-80" src="/images/product_img.png" alt="best-product" />
              <div className="flex flex-col gap-2 items-center mt-4 text-sm">
                <div>상품명</div>
                <div className="text-gray-400">1,0000원</div>
              </div>
            </li>
            <li>
              <img className="w-56 h-80" src="/images/product_img.png" alt="best-product" />
              <div className="flex flex-col gap-2 items-center mt-4 text-sm">
                <div>상품명</div>
                <div className="text-gray-400">1,0000원</div>
              </div>
            </li>
            <li>
              <img className="w-56 h-80" src="/images/product_img.png" alt="best-product" />
              <div className="flex flex-col gap-2 items-center mt-4 text-sm">
                <div>상품명</div>
                <div className="text-gray-400">1,0000원</div>
              </div>
            </li>
          </ul>
          <Button
            className="text-base font-bold text-center mt-10"
            size="lg"
            onClick={() => {
              navigate(PATH.shop);
            }}
          >
            Go to shop
          </Button>
        </div>
      </div>
    </>
  );
};

export default BestItemList;
