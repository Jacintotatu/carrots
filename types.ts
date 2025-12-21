
import React from 'react';

export interface RestaurantInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    monday: string;
    tueToSat: string;
    sunday: string;
  };
}

export interface MenuLink {
  label: string;
  url: string;
  type: 'primary' | 'secondary' | 'accent';
  icon?: React.ReactNode;
  internal?: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  tags?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
}

// Add missing GroupMenu types
export interface GroupMenuSection {
  title: string;
  items: string[];
}

export interface GroupMenu {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  sections: GroupMenuSection[];
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  tag: string;
  isVegetarian: boolean;
  validity: string;
}