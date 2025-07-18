'use client';

import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi';
import * as BiIcons from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io5';

// Define icon libraries mapping
const iconLibraries = {
  Fa: FaIcons,
  Hi: HiIcons,
  Bi: BiIcons,
  Ai: AiIcons,
  Io: IoIcons
};

type IconProps = {
  iconName: string;
  className?: string;
  size?: number;
};

export const DynamicIcon: React.FC<IconProps> = ({ iconName, className = '', size }) => {
  // Default fallback icon
  let IconComponent = FaIcons.FaQuestionCircle;
  
  try {
    // First, determine which library the icon belongs to based on prefix
    if (iconName.startsWith('Fa')) {
      IconComponent = FaIcons[iconName as keyof typeof FaIcons];
    } else if (iconName.startsWith('Hi')) {
      IconComponent = HiIcons[iconName as keyof typeof HiIcons];
    } else if (iconName.startsWith('Bi')) {
      IconComponent = BiIcons[iconName as keyof typeof BiIcons];
    } else if (iconName.startsWith('Ai')) {
      IconComponent = AiIcons[iconName as keyof typeof AiIcons];
    } else if (iconName.startsWith('Io')) {
      IconComponent = IoIcons[iconName as keyof typeof IoIcons];
    }
    
    // If IconComponent is undefined, fall back to question circle
    if (!IconComponent) {
      console.warn(`Icon ${iconName} not found, using fallback`);
      IconComponent = FaIcons.FaQuestionCircle;
    }
  } catch (error) {
    console.error(`Error loading icon ${iconName}:`, error);
  }
  
  return <IconComponent className={className} size={size} />;
};
