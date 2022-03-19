import React from 'react';
import { ReactComponent as VkLogo } from '../../../assets/icons/vk.svg';
// import { ReactComponent as SearchIcon } from '../../../assets/icons/search-icon.svg';
import './header.css';
const Header = () => {
  return (
    <header>
      <div className="header">
        <svg
          width="136"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#new_logo_vk_with_text__a)">
            <g clip-path="url(#new_logo_vk_with_text__b)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M67 12.5c0 3.34-2.43 5.5-5.88 5.5-3.45 0-5.88-2.16-5.88-5.5S57.67 7 61.12 7C64.57 7 67 9.16 67 12.5zm-9.22 0c0 2.07 1.35 3.5 3.34 3.5s3.34-1.43 3.34-3.5-1.35-3.45-3.34-3.45-3.34 1.38-3.34 3.45zm-17.03-.21c.95-.44 1.56-1.18 1.56-2.33 0-1.73-1.58-2.96-3.87-2.96h-5.27v11h5.5c2.37 0 4.02-1.29 4.02-3.05 0-1.33-.87-2.32-1.94-2.66zM35.6 9.01h2.83c.85 0 1.44.5 1.44 1.2s-.6 1.2-1.44 1.2h-2.83V9zM38.67 16h-3.06V13.3h3.06c.96 0 1.59.55 1.59 1.36 0 .8-.63 1.33-1.59 1.33zM51.84 18h3.19l-5.06-5.71L54.61 7h-2.9l-3.68 4.27h-.6V7H45v11h2.44v-4.38h.59l3.8 4.38zM76.47 7v4.34h-4.93V7H69.1v11h2.43v-4.44h4.93V18h2.43V7h-2.43zM86.9 18h-2.44V9.22h-3.8V7H90.7v2.22h-3.8V18zm9.7-11c-2.14 0-4.02.89-4.57 2.8l2.24.37a2.38 2.38 0 012.2-1.25c1.33 0 2.12.9 2.22 2.33h-2.37c-3.23 0-4.84 1.42-4.84 3.45 0 2.05 1.59 3.3 3.83 3.3 1.8 0 3-.82 3.53-1.73l.5 1.73h1.8v-6.18c0-3.19-1.73-4.82-4.54-4.82zm-.72 9.16c-1.19 0-1.95-.61-1.95-1.57 0-.84.62-1.43 2.48-1.43h2.3c0 1.8-1.14 3-2.83 3zM113.73 18h-3.2l-3.8-4.38h-.6V18h-2.42V7h2.43v4.27h.59L110.4 7h2.9l-4.63 5.29 5.05 5.71zm4.27 0h2.44V9.22h3.8V7H114.2v2.22h3.8V18zm12.3-11c3.33 0 5.7 2.2 5.7 5.37 0 .3-.02.55-.04.79h-8.84c.23 1.69 1.46 2.83 3.32 2.83 1.29 0 2.3-.55 2.83-1.33l2.29.38c-.83 2.1-2.98 2.96-5.27 2.96-3.34 0-5.71-2.18-5.71-5.5s2.37-5.5 5.71-5.5zm3.06 4.25A3.06 3.06 0 00130.29 9a3 3 0 00-3.02 2.25h6.09z"
                fill="currentColor"
              ></path>
              <path
                d="M11.5 24h1c5.44 0 8.15 0 9.83-1.68C24 20.64 24 17.92 24 12.5v-1.02c0-5.4 0-8.12-1.67-9.8C20.65 0 17.93 0 12.5 0h-1C6.06 0 3.35 0 1.67 1.68 0 3.36 0 6.08 0 11.5v1.02c0 5.4 0 8.12 1.68 9.8C3.36 24 6.08 24 11.5 24z"
                fill="#07F"
              ></path>
              <path
                d="M12.77 17.29c-5.47 0-8.59-3.75-8.72-9.99h2.74c.09 4.58 2.11 6.52 3.71 6.92V7.3h2.58v3.95c1.58-.17 3.24-1.97 3.8-3.95h2.58a7.62 7.62 0 01-3.51 4.98 7.9 7.9 0 014.11 5.01h-2.84a4.94 4.94 0 00-4.14-3.57v3.57h-.31z"
                fill="#fff"
              ></path>
            </g>
          </g>
          <defs>
            <clipPath id="new_logo_vk_with_text__a">
              <path
                fill="#fff"
                transform="translate(.001)"
                d="M0 0h136v24H0z"
              ></path>
            </clipPath>
            <clipPath id="new_logo_vk_with_text__b">
              <path
                fill="#fff"
                transform="translate(0 -12)"
                d="M0 0h136v48H0z"
              ></path>
            </clipPath>
          </defs>
        </svg>
        <div className="input-search">
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd" opacity=".92">
              <path opacity=".1" d="M0 0H16V16H0z" />
              <path
                d="M6.5 1a5.5 5.5 0 0 1 4.383 8.823l3.896 3.9a.75.75 0 0 1-1.061 1.06l-3.895-3.9A5.5 5.5 0 1 1 6.5 1zm0 1.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
                fill="#666"
                fill-rule="nonzero"
              />
            </g>
          </svg>
          <input type="text" name="" placeholder="Поиск" />
        </div>
      </div>
    </header>
  );
};

export default Header;
