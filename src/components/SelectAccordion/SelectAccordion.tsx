import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useState } from 'react';

export type TSelectDropdownProps<T extends TItem> = {
  triggerName: string;
  itemList: T[];
};

export type TItem = {
  id: number;
  name: string;
  imageUrl: string;
};

/**
 * @todo react hook form Controller 적용
 */
const SelectAccordion = <T extends TItem>(props: TSelectDropdownProps<T>) => {
  const { triggerName, itemList } = props;

  const [position, setPosition] = useState<TItem>();

  const onSelect = (item: TItem) => {
    setPosition(item);
  };

  const itemColor = (id: number) => {
    return position?.id === id ? 'bg-accent' : '';
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="w-full px-4 text-start text-sm ">
          <div className="flex gap-2 items-center justify-center">
            <span>{triggerName}</span>
            {!!position && <span className="text-gray-500">{`: ${position.name}`}</span>}
          </div>
        </AccordionTrigger>
        <AccordionContent className="w-full grid grid-cols-6 ">
          {itemList.map((el) => (
            <div
              onClick={() => onSelect(el)}
              className={`flex flex-col gap-3 items-center p-4 hover:bg-accent ${itemColor(el.id)}`}
            >
              <img width="80px" height="80px" src={el.imageUrl} alt="fabric" />
              <span className="text-xs">{el.name}</span>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SelectAccordion;
