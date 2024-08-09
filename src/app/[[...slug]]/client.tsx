'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import AppWrapper from '../../AppWrapper';

const App = dynamic(() => import('../../App'), { ssr: false });

export function ClientOnly() {
	return <AppWrapper />;
}
