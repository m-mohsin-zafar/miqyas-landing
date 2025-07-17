'use client';

import { Dictionary } from '../i18n/types';
import LaunchModal from './LaunchModal';

interface ClientLaunchModalProps {
  dictionary: Dictionary;
}

export default function ClientLaunchModal({ dictionary }: ClientLaunchModalProps) {
  return <LaunchModal dictionary={dictionary} />;
}
