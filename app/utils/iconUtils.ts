import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as HiIcons from 'react-icons/hi';
import * as BsIcons from 'react-icons/bs';
import { createElement, ReactElement, JSX } from 'react';

type IconType = (props: any) => JSX.Element;

/**
 * Dynamically gets an icon component by name from react-icons
 * @param iconName The name of the icon, e.g., "FaRocket"
 * @returns The React icon component or null if not found
 */
export const getIconByName = (iconName: string): IconType | null => {
  // Get library prefix (first two characters)
  const prefix = iconName.substring(0, 2);
  
  // Select the correct icon library
  let iconLibrary;
  switch (prefix) {
    case 'Fa':
      iconLibrary = FaIcons;
      break;
    case 'Md':
      iconLibrary = MdIcons;
      break;
    case 'Hi':
      iconLibrary = HiIcons;
      break;
    case 'Bs':
      iconLibrary = BsIcons;
      break;
    default:
      console.warn(`Unknown icon library prefix: ${prefix}`);
      return null;
  }
  
  // Get the icon from the library
  if (iconLibrary && iconName in iconLibrary) {
    return iconLibrary[iconName as keyof typeof iconLibrary] as IconType;
  }
  
  console.warn(`Icon ${iconName} not found`);
  return null;
};

/**
 * Helper function to get the React Icon component from its name
 * @param iconName The name of the icon component as string
 * @param props Additional props to pass to the icon
 * @returns The rendered icon component or null
 */
export const DynamicIcon = ({ 
  iconName, 
  ...props 
}: { 
  iconName: string;
  [key: string]: any;
}): ReactElement | null => {
  const IconComponent = getIconByName(iconName);
  
  if (!IconComponent) {
    return null;
  }
  
  return createElement(IconComponent, props);
};
