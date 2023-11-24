'use client';

import React, { useState } from 'react';

export default function Search({
  onSearch,
}: {
  onSearch: (term: string) => void;
}) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className='flex justify-center searchmargintop'>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <input
        value={searchTerm}
        className='bg-primaryLight p-2 rounded-l-md shadow-sm mh-10 outline-none'
        type='text'
        id='search'
        required
        onChange={handleChange}
        placeholder='Find an item...'
      />
      <button
        className='flex-shrink-0 flex-grow-0 max-h-10 bg-primaryLight py-2 px-3 rounded-r-md '
        type='submit'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='30'
          viewBox='0 0 16 16'
        >
          <path
            fill='currentColor'
            d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0'
          />
        </svg>{' '}
      </button>
    </div>
  );
}
