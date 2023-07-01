import React from 'react';
import { ProfileHeader, ProfileBody} from '@components';

export default function profile() {
  return (
      <section className="flex flex-col">

      <ProfileHeader />
      <ProfileBody />

      </section>

  );
  }
