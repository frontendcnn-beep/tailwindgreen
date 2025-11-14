import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>
                <div className='min-h-96 px-5 py-6 max-w-7xl mx-auto'>
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Layout
