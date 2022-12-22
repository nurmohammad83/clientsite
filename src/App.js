import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import From from './Component/From';
import Table from './Component/Table';
import Main from './Layout/Main';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main/>,
      children:[
        {
          path:'/',
          element:<From/>
        },
        {
          path:'/table',
          element:<Table/>,
        }
        
      ]
    }
  ])
  return (
   <div>
     <RouterProvider router={router}>

</RouterProvider>
 <Toaster/>
   </div>
  );
}

export default App;
