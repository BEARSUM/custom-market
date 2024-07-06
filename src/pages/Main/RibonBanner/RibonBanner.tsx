import { Link } from 'react-router-dom';
import { PATH } from '@/constant/paths';

/**
 * @todo content,path fetch api {content:string,link:string}[]
 */
const RibonBanner = () => {
  return (
    <>
      <div className="w-full h-14 bg-[#efefef] shadow-md">
        <div className="w-full h-full flex animate-slider">
          <div className="flex justify-center items-center basis-full shrink-0 ">
            <span className="mr-1">content</span>
            <Link to={PATH.cart} className="font-bold underline">
              구경하러가기
            </Link>
          </div>
          <div className="flex justify-center items-center basis-full shrink-0">
            <span className="mr-1">content</span>
            <Link to={PATH.cart} className="font-bold underline">
              구경하러가기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RibonBanner;
