'use client';

import { useState } from 'react';
import useSWR from 'swr';

export default function UserSearch() {
  // /api/search/${keyword}
  const [keyword, setKeyword] = useState('');
  const { data, isLoading, error } = useSWR(`/api/search/${keyword}`);
  console.log(data);

  return <></>;
}
