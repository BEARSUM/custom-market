import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { PATH } from '@/constant/paths';
import { LinkList } from './LinkList';
import { CUSTOMIZING_PATH } from '@/constant/paths';
import { generatePath } from 'react-router-dom';

/**
 * Header에서 쓰이는 NavSheet 컴포넌트
 */

const NavSheet = () => {
  const gerneratePath = (category: string) => {
    const path = generatePath(CUSTOMIZING_PATH.customizing, { category: category });
    return path;
  };

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon">
          <img className="w-6" src="/icons/hamburger_icon.svg" alt="mypage_icon" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <img className="h-4" src="/icons/logo.svg" alt="logo" />
          </SheetTitle>
        </SheetHeader>
        <ul className="flex flex-col gap-4 font-semibold text-xl mt-10">
          <LinkList path={PATH.root}>Home</LinkList>
          <LinkList path={PATH.shop}>Shop</LinkList>
          <LinkList path={gerneratePath('all')}>Customizing</LinkList>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default NavSheet;
