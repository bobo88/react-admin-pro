import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'ycy88',
          title: 'ycy88',
          href: 'https://fe.ycy88.com',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
