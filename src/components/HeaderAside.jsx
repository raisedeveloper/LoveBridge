import React, { useState } from 'react';
import './Styles.css';
import Stack from '@mui/material/Stack';
import { pink } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
export default function Home({ user }) {
  const [activeButton, setActiveButton] = useState(1); // 초기에 첫 번째 버튼이 활성화됨

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId === activeButton ? null : buttonId);
  };
  return (
    <div style={{ backgroundColor: 'pink', minHeight: '100vh' }}><br />
      <Stack sx={{ border: '2px solid lightcoral', width: 300, marginLeft: 1 }} direction="row" spacing={3}>
        <HomeIcon sx={{ color: pink[500], padding: '30px', }} />
        <h1 style={{ textAlign: 'center', padding: 10, margin: '10px 0', color: 'lightcoral' }}>LoveBridge</h1><br />
      </Stack>


      <button
        className={activeButton === 1 ? 'active' : ''}
        onClick={() => handleButtonClick(1)}
      >
        LoveBridge
      </button>
      <br />
      <button
        className={activeButton === 2 ? 'active' : ''}
        onClick={() => handleButtonClick(2)}
      >
        dairy
      </button>
      <br />
      <button
        className={activeButton === 3 ? 'active' : ''}
        onClick={() => handleButtonClick(3)}
      >
        album
      </button>
      <br />
      <button
        className={activeButton === 4 ? 'active' : ''}
        onClick={() => handleButtonClick(4)}
      >
        calendar
      </button>
      <br />
      <button
        className={activeButton === 5 ? 'active' : ''}
        onClick={() => handleButtonClick(5)}
      >
        setting
      </button>
    </div>
  )
};