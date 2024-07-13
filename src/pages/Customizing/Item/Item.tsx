import { Button } from '@/components/ui/button';
import { generatePath, useNavigate } from 'react-router-dom';
import { CUSTOMIZING_PATH } from '@/constant/paths';

type ItemPropsType = {
  id: number;
  name: string;
};
const Item = (props: ItemPropsType) => {
  const { name, id } = props;

  const navigate = useNavigate();

  const goToOrderPage = () => {
    const path = generatePath(CUSTOMIZING_PATH.order, { id: id.toString() });
    navigate(path);
  };

  return (
    <li className="px-4">
      <img src="/images/default_product_img.png" alt="customizing-product" />
      <div className="flex flex-col gap-2 items-center mt-4 mb-24 text-sm">
        <div>{name}</div>
        <Button variant="outline" onClick={goToOrderPage}>
          커스텀하기
        </Button>
      </div>
    </li>
  );
};

export default Item;
