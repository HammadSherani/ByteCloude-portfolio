import React from 'react';

function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
              <h1>Website Header</h1>

      {children}
              <h1>Website Footer</h1>

    </div>
  );
}

export default WebsiteLayout;
