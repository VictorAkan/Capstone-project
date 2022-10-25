import { Navbar } from "../Navbar"

export const DLoader = () => {
    return (
        <div>
            <Navbar />
            <div className="flex justify-center">
                <h1 className="text-center text-2xl font-bold tracking-widest">
                    Loading...
                </h1>
            </div>
        </div>
    )
}