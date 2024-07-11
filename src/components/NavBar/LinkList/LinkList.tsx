import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Navbar에 쓰이는 LinkList 컴포넌트
 */

interface LinkListProps {
  path: string;
  children: ReactNode;
}
const LinkList = (props: LinkListProps) => {
  const { path, children } = props;

  return (
    <li className="text-sm mx-2 h-16">
      <NavLink
        to={path}
        className={({ isActive }) => {
          return isActive ? 'border-b border-foreground py-2' : 'text-[#898989]';
        }}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default LinkList;
