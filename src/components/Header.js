import React from 'react';
import { Button } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

const Header = ({ brandName }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src="public/logo192.png" alt="Logo" />
      </div>
      <h1>{brandName}</h1>
      <nav className="menu">
        <Button className="menu-item" minimal text="Generator" />
        <Button className="menu-item" minimal text="About" />
        <Button className="menu-item" minimal text="Pricing" />
        <Button className="menu-item" minimal text="Account" />
        <Button className="menu-item" minimal text="Language" />
      </nav>
      <Button className="dashboard-button" icon={IconNames.DASHBOARD} text=" Dashboard" />
    </header>
  );
};

export default Header;
