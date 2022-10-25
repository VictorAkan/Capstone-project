import { Navbar } from "../../components/Navbar"

export const Error = () => {
    return (
        <div>
            <Navbar />
            <div className="flex justify-center">
                <h2 className="text-4xl">Sorry, Error Code 404!!!</h2>
            </div>
        </div>
    )
}