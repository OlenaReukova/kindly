import { IconPropType } from '../search/filter/QuickBrowse';

const BoyIcon: React.FC<IconPropType> = ({ subcategory }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='50'
      height='50'
      viewBox='0 0 64 64'
    >
      <path
        fill={subcategory === 'boys' ? '#FF9E5E' : 'currentColor'}
        d='M58.818 32.032c.158-1.643.279-3.764.279-6.426C59.098 17.092 54.258 2 32 2S4.902 17.092 4.902 25.606c0 2.662.121 4.783.277 6.426C3.084 33.03 2 35.31 2 37.566c0 1.622.529 3.146 1.488 4.288c.914 1.09 2.143 1.756 3.588 1.953C7.791 55.534 22.059 62 32 62c9.939 0 24.209-6.466 24.922-18.192c1.447-.197 2.676-.863 3.59-1.952c.961-1.144 1.488-2.668 1.488-4.29c0-2.256-1.084-4.536-3.182-5.534m.223 8.545c-.729.868-1.785 1.326-3.059 1.326h-.969v.983c0 10.623-13.404 17.146-23.014 17.146c-9.611 0-23.016-6.522-23.016-17.146v-.983h-.965c-1.271 0-2.33-.458-3.057-1.326c-.652-.774-1.025-1.873-1.025-3.011c0-2.036 1.137-4.091 3.676-4.091h.764l.178-.756c.031-.135.779-3.383 1.188-10.241c.121-2.048 1.023-2.774 3.441-2.774c1.697 0 3.906.39 6.463.841c3.465.613 7.782 1.375 12.354 1.375c4.574 0 8.891-.762 12.357-1.374c2.555-.452 4.764-.841 6.461-.841c2.418 0 3.318.726 3.441 2.774c.41 6.856 1.154 10.105 1.188 10.239l.176.758h.766c2.539 0 3.676 2.055 3.676 4.091c-.001 1.137-.374 2.236-1.024 3.01'
      />
      <path
        fill={subcategory === 'boys' ? '#FF9E5E' : 'currentColor'}
        d='M44.498 30c-2.764 0-4.998 2.237-4.998 5s2.234 5 4.998 5a5 5 0 1 0 0-10'
      />
      <circle
        cx='19.5'
        cy='35'
        r='5'
        fill={subcategory === 'boys' ? '#FF9E5E' : 'currentColor'}
      />
      <path
        fill={subcategory === 'boys' ? '#FF9E5E' : 'currentColor'}
        d='M40.09 47.627c-5.215 3.6-10.998 3.578-16.18 0c-.623-.432-1.186.314-.764 1.006C24.725 51.205 27.914 53.5 32 53.5c4.084 0 7.275-2.295 8.852-4.867c.425-.692-.137-1.438-.762-1.006'
      />
    </svg>
  );
};

export default BoyIcon;
