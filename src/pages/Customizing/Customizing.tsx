import { Item } from './Item';

/**
 * @todo customizing item-list data fetch api
 */
const Customizing = () => {
  const itemList = [{ name: '파우치1' }];

  return (
    <div className="">
      <ul className="grid grid-cols-5 px-20">
        {itemList.map(({ name }) => (
          <Item name={name} />
        ))}
      </ul>
    </div>
  );
};

export default Customizing;
