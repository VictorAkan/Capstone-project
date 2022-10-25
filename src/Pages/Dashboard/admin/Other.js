import { AdminNavbar } from "../../../components/Admin/AdminNavbar"
import { Sidebar } from "./Sidebar"

export const Other = () => {
    return (
        <div>
            <AdminNavbar />
            <div className="flex">
                <Sidebar />
                <div>
                    This is another page
                </div>
            </div>
        </div>
    )
}