import React from "react";
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
  return (
    <div style={{ backgroundColor: 'pink', minHeight: '100vh' }}><br />
      <Stack direction="row" spacing={3}>
        <HomeIcon sx={{ color: pink[500] , padding: '30px'}} />
      <h1 style={{ textAlign: 'center', padding: '10px', margin: '10px 0', color: 'red' }}>LoveBridge</h1><br />
      </Stack>
      
      <button style={{ textAlign: 'center', padding: '10px', margin: '10px 0' }}>LoveBridge</button><br />
      <button style={{ textAlign: 'center', padding: '10px', margin: '10px 0' }}>dairy</button><br />
      <button style={{ textAlign: 'center', padding: '10px', margin: '10px 0' }}>album</button><br />
      <button style={{ textAlign: 'center', padding: '10px', margin: '10px 0' }}>calendar</button><br />
      <button style={{ textAlign: 'center', padding: '10px', margin: '10px 0' }}>setting</button>
    </div>
  )
};