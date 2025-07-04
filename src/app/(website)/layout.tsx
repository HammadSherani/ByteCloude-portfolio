import React from 'react';

function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-primary-50 min-h-screen">
      <h1>Website Header</h1>

      {children}
      <h1>Website Footer</h1>

    </div>
  );
}

export default WebsiteLayout;
