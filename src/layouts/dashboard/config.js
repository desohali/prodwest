import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import { SvgIcon } from '@mui/material';
import TagIcon from '@heroicons/react/24/solid/TagIcon';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import CampaignIcon from '@mui/icons-material/Campaign';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
export const tempPassword = "vestid123";

import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
export const items = [
  {
    title: 'Catalog',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <BookmarkBorderIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Orders',
    path: '/orders',
    icon: (
      <SvgIcon fontSize="small">
        <ShoppingCartCheckoutIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Fans',
    path: '/customers',
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Clubs',
    path: '/companies',
    icon: (
      <SvgIcon fontSize="small">
        <GroupWorkIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Clubs Admin',
    path: '/companies-admin',
    icon: (
      <SvgIcon fontSize="small">
        <Diversity2Icon />
      </SvgIcon>
    )
  },
  {
    title: 'Super Admins',
    path: '/users-admin',
    icon: (
      <SvgIcon fontSize="small">
        <GroupsIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Campaigns',
    path: '/campaigns',
    icon: (
      <SvgIcon fontSize="small">
        <CampaignIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Tags',
    path: '/tags',
    icon: (
      <SvgIcon fontSize="small">
        <TagIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Profile',
    path: '/account',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Logout',
    path: '/auth/login',
    icon: (
      <SvgIcon fontSize="small">
        <LockClosedIcon />
      </SvgIcon>
    )
  }
];
