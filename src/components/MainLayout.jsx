import React from 'react';
import { FilterLayout } from './FilterLayout';
import ReportLayout from './ReportLayout';

export function MainLayout() {
  return (
    <main className='p-4 container m-auto'>
      <div className=''>
        <FilterLayout />
        <ReportLayout />
      </div>
    </main>
  );
}
