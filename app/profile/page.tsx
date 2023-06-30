import React from 'react';
import { ProfileHeader, ProfileBody} from '@components';

export default function profile({ children }: { children: React.ReactNode }) {
  return (
      <section>

      <ProfileHeader />
      <ProfileBody />
      {children}
        </section>

  );
  }
