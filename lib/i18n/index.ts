// Export all i18n utilities and types with explicit re-exports to avoid conflicts
export { i18n } from './config';
export type { Locale } from './config';
export { getDirection } from './config'; // Use getDirection from config.ts
export * from './types';
// Export utils with explicit naming to avoid conflicts
export { 
  getDictionary,
  isRTL,
  getTextAlign,
  getFlexDirection
} from './utils';
