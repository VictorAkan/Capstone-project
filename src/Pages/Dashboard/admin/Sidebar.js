import { Link } from "react-router-dom"

export const Sidebar = () => {
    return (
        <div className="sidebar bg-red-500 py-6 pb-72 h-full">
            <div className="block text-white">
                <div className="mt-10">
                    <Link className="p-3 px-20 pr-36 w-full text-2xl hover:bg-slate-100 hover:text-red-500" to="/adminDashboard">Overview</Link>
                </div>
                <div className="mt-5">
                    <Link className="p-3 px-20 w-full text-2xl hover:bg-slate-100 hover:text-red-500" to="/carDealership">Car dealerships</Link>
                </div>
                <div className="mt-5">
                    <Link className="p-3 px-20 pr-40 w-full text-2xl hover:bg-slate-100 hover:text-red-500" to="/other">The rest</Link>
                </div>
                <div className="mt-5">
                    <Link className="p-3 px-20 pr-40 w-full text-2xl hover:bg-slate-100 hover:text-red-500" to="/other">The rest</Link>
                </div>
            </div>
        </div>
    )
}