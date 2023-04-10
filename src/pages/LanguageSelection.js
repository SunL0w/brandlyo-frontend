import React from 'react';
import { Typography, Space, Button, Dropdown } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Title } = Typography;

const LanguageSelection = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <img src="public/ui-items/french-flag.png" alt="French flag" /> Français
      </Menu.Item>
      <Menu.Item>
        <img src="public/ui-items//english-flag.png" alt="English flag" /> English
      </Menu.Item>
    </Menu>
  );

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <Title level={2}>Choisissez votre langue / Choose your language</Title>
      <Space size="large">
        <Dropdown overlay={menu}>
          <Button size="large" icon={<GlobalOutlined />}>
            Langue / Language
          </Button>
        </Dropdown>
      </Space>
    </div>
  );
};

export default LanguageSelection;
