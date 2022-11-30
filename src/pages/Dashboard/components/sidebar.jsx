import { useEffect } from 'react';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import { ChartBar as ChartBarIcon } from '../../../icons/chart-bar';
import { Cog as CogIcon } from '../../../icons/cog';
import { Lock as LockIcon } from '../../../icons/lock';
import { ShoppingBag as ShoppingBagIcon } from '../../../icons/shopping-bag';
import { User as UserIcon } from '../../../icons/user';
import { UserAdd as UserAddIcon } from '../../../icons/user-add';
import { Users as UsersIcon } from '../../../icons/users';
import { XCircle as XCircleIcon } from '../../../icons/x-circle';
import { NavItem } from './nav-item';

const items = [
  {
    href: '/',
    icon: (<ChartBarIcon fontSize="small" />),
    title: 'Dashboard'
  },
  {
    href: '/customers',
    icon: (<UsersIcon fontSize="small" />),
    title: 'Customers'
  },
  {
    href: '/products',
    icon: (<ShoppingBagIcon fontSize="small" />),
    title: 'Products'
  },
  {
    href: '/account',
    icon: (<UserIcon fontSize="small" />),
    title: 'Account'
  },
  {
    href: '/settings',
    icon: (<CogIcon fontSize="small" />),
    title: 'Settings'
  },
  {
    href: '/login',
    icon: (<LockIcon fontSize="small" />),
    title: 'Login'
  },
  {
    href: '/register',
    icon: (<UserAddIcon fontSize="small" />),
    title: 'Register'
  },
  {
    href: '/404',
    icon: (<XCircleIcon fontSize="small" />),
    title: 'Error'
  }
];

export const Sidebar = (props) => {
  const { open, onClose } = props;

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        </Box>
    </>
  );

  return (
    <Drawer
    anchor="left"
    open
    PaperProps={{
      sx: {
        backgroundColor: 'neutral.900',
        color: '#FFFFFF',
        width: 200,
        pt: 5,
      }
    }}
    variant="permanent"
  >
    {content}
  </Drawer>
  );
};