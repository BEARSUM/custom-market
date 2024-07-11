import { Button } from '@/components/ui/button';

type ItemPropsType = {
  name: string;
};
const Item = ({ name }: ItemPropsType) => {
  return (
    <li className="px-4">
      <img src="/images/default_product_img.png" alt="customizing-product" />
      <div className="flex flex-col gap-2 items-center mt-4 mb-24 text-sm">
        <div>{name}</div>
        <Button variant="outline">커스텀하기</Button>
      </div>
    </li>
  );
};

export default Item;
