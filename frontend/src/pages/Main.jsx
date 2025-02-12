

const MainRouter = () => {
    return (
        <div className='flex flex-col h-screen'>
            <div className="flex-1 header">
                <Header />
            </div>

            <div className="content">
                <Outlet />
            </div>

            <div className="footer bg-[#282c34] text-[#ffffff] mt-5 text-center py-6">
                <Footer />
            </div>
        </div>
    )
}

export default MainRouter