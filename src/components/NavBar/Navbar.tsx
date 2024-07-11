import { generatePath } from 'react-router-dom';
import { LinkList } from './LinkList';
import { CUSTOMIZING_PATH, PATH } from '@/constant/paths';

/**
 * @todo product category data fetch api, 타입 분리
 */

interface Category {
  id: number;
  value: string;
  item: string;
}

type CategoryPropsType = {
  categoryList: Category[];
};
const Navbar = ({ categoryList }: CategoryPropsType) => {
  const gerneratePath = (category: string) => {
    return generatePath(CUSTOMIZING_PATH.customizing, { category: category });
  };

  return (
    <>
      <ul className="flex">
        <LinkList path={PATH.customizing}>customizing</LinkList>
        <LinkList path={PATH.shop}>shop</LinkList>
      </ul>
      <ul className="flex">
        {categoryList.map(({ id, value, item }) => (
          <LinkList key={id} path={gerneratePath(value)}>
            {item}
          </LinkList>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
