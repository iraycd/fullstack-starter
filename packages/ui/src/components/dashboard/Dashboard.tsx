import React from 'react';
import { Sidebar } from '../sidebar';
import { Header } from '../header';
import { IMenuItemProps } from 'components/sidebar/types';
import { IDropdownProps } from 'components/dropdown/types';

export const Dashboard: React.FC = () => {

    const menuItems: IMenuItemProps[] = [
        {
        path: '/app/dashboard',
        icon: 'HomeIcon',
        name: 'Dashboard',
        exact: true,
        },
        {
        path: '/app/forms',
        icon: 'FormsIcon',
        name: 'Forms',
        },
        {
        path: '/app/charts',
        icon: 'ChartsIcon',
        name: 'Charts',
        },
    ];
  return (
    <div className='flex h-screen sm:flex-col-reverse dark:bg-gray-800 relative justify-end'>
        <Sidebar menuItems={menuItems} />
        <div className="flex flex-col w-full z-50">
            <Header 
                rightDropdown={
                    {
                        title: 'Settings',
                        menuItems: [
                            {
                            icon: 'ProfileIcon',
                            name: 'Profile',
                            path: '/me',
                            },
                            {
                            icon: 'SettingsIcon',
                            name: 'Settings',
                            path: '/settings',
                            },
                            {
                            icon: 'LogoutIcon',
                            name: 'Logout',
                            path: '/logout',
                            },
                        ],
                    } as IDropdownProps
                }
           />
        </div>
    </div>
  );
};
