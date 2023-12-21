import { RouterProvider } from 'react-router-dom';
import globalRouter from './router';
import './popup.styl';

function Popup() {
  return <RouterProvider router={globalRouter} />
}

export default Popup;
