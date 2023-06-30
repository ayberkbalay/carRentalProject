import { Login } from '@components';
import React from 'react';

export default function signin({ children }: { children: React.ReactNode }) {
    return (
        <section>
        <Login />
        {children}
        </section>
    );
    }