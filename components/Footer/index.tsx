import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Container } from '@/components/Container';

export function Footer() {
  const navigation = ['Product', 'Features', 'Pricing', 'Company', 'Blog'];
  const legal = ['Terms', 'Privacy', 'Legal'];
  return (
    <div className="relative">
      <Container>Copyright 2024</Container>
    </div>
  );
}
