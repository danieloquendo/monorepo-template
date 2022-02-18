import React from 'react';
import CategoryMenuHeader from '../CategoryMenuHeader';

interface ISideMenuProps {
  showMenu: boolean;
  onClose?: () => void;
  onMouseLeave?: () => void;
  isMobile?: boolean;
}

const SideMenu: React.FC<ISideMenuProps> = ({ showMenu, children, isMobile, onMouseLeave, onClose }) => {
  return (
    <>
      {showMenu && (
        <div
          className={`open ${isMobile ? 'mobile' : 'desktop'}`}
          data-category-menu-side-menu
          aria-label="Categories"
          onMouseLeave={onMouseLeave}
        >
          <CategoryMenuHeader onClose={onClose} />
          <div data-category-menu-content-container>{children}</div>
        </div>
      )}
    </>
  );
};

export default SideMenu;
