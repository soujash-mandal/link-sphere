import { Outlet } from 'react-router-dom'
import Navbar from './Layout/Navbar'
import { useUser } from '@clerk/clerk-react';

const Layout = () => {

    const { isLoaded } = useUser();

    if(!isLoaded)
    {
        return <></>
    }

    return (
        <>
            <Navbar />
            <div className='px-4'><Outlet /></div>
        </>
    )
}

export default Layout