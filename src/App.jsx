import { Outlet } from 'react-router-dom';
import HeaderAside from "./components/HeaderAside";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Firebase from './pages/Firebase';

const queryClient = new QueryClient()

function App() {
  // console.log(process.env.REACT_APP_YOUTUBE_API_KEY);
  return (
    <>
      <HeaderAside />
      <Firebase />
      {/* <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider> */}
    </>
  );
}

export default App;