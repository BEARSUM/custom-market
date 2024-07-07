import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

/**
 * NavSheet에 쓰이는 LinkList 컴포넌트
 */

interface LinkListProps {
  path: string;
  children: ReactNode;
}
const LinkList = (props: LinkListProps) => {
  const { path, children } = props;

  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) => {
          return isActive ? 'text-primary' : 'text-foreground';
        }}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default LinkList;
