'use client';

import { Dictionary } from '@/lib/i18n';
import LaunchModal from './launch-modal';

interface ClientLaunchModalProps {
  dictionary: Dictionary;
}

export default function ClientLaunchModal({ dictionary }: ClientLaunchModalProps) {
  return <LaunchModal dictionary={dictionary} />;
}
