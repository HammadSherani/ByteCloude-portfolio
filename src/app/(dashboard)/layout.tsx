import React from 'react'

function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='relative'>
            <h1>Dashboard Header</h1>
            {children}
            <h1>Dashboard Footer</h1>
        </div>
    )
}

export default DashboardLayout
