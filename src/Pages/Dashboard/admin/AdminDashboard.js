import { AdminNavbar } from "../../../components/Admin/AdminNavbar"
import { Sidebar } from "./Sidebar"

export const AdminDashboard = () => {
    return (
        <div>
            <AdminNavbar />
            <div className="flex">
                <Sidebar />
                <div>
                    <div className="flex items-center space-x-7 px-20 mt-10">
                        <div className="bg-white drop-shadow-md p-4 rounded-md w-60">
                            <div className="text-2xl capitalize">Number of users</div>
                            <div>Progress bar</div>
                        </div>
                        <div className="bg-white drop-shadow-md p-4 rounded-md w-60">
                            <div className="text-2xl capitalize">Number of users</div>
                            <div>Progress bar</div>
                            <div>Reviews</div>
                        </div>
                        <div className="bg-white drop-shadow-md p-4 rounded-md w-60">
                            <div className="text-2xl capitalize">Reviews</div>
                            <div>Progress bar</div>
                        </div>
                    </div>
                    <div className="table text-red-500 uppercase bold text-3xl text-center flex justify-center mt-20">
                        <p className="text-center">Dashboard table</p>
                    </div>
                </div>
            </div>
        </div>
    )
}