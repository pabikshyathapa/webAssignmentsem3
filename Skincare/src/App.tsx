import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Registration from './Pages/UserPages/Registration.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import Login from './Pages/UserPages/Login.tsx'
import Dashboard from "./Pages/UserPages/Dashboard.tsx";
import Account from "./Pages/UserPages/Account.tsx";
import AddProduct from "./Pages/UserPages/AddProduct.tsx";
import Location from "./Pages/UserPages/Location.tsx";
import MyProducts from "./Pages/UserPages/MyProducts.tsx";
import EditProduct from "./Pages/UserPages/EditProduct.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: "/",
        element: <Registration />,
    },
    {
        path: "/sign-in",
        element: <Login/>,
    },

    {
        path: "/dashboard",
        element: <Dashboard/>,
    },
    {
        path: "/add-product",
        element: <AddProduct/>,
    },
    {
        path: "/account",
        element: <Account/>,
    },
    {
        path: "/location",
        element: <Location/>,
    },
    {
        path: "/my-products",
        element: <MyProducts/>,
    },
    {
        path: "/edit-products",
        element: <EditProduct/>
    },
]);

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ToastContainer position="top-right" />
            <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
    );
}

export default App