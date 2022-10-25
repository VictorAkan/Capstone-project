import { AdminNavbar } from "../../../components/Admin/AdminNavbar"
import { Sidebar } from "./Sidebar"
import { useState } from "react"
import { collection,addDoc } from "firebase/firestore"
import { db } from "../../../firebase/firebase-config"

export const CarDealerShip = () => {
    const [dealership, setDealership] = useState('')
    const [state, setState] = useState('')
    const [file, setFile] = useState()

    const canAdd = Boolean(dealership) && Boolean(file) && Boolean(state) === true

    const handleFileChange = (e) => {
        console.log(e.target.files)
        setFile(URL.createObjectURL(e.target.files[0]))
    }

    const addDealership = async () => {
        try {
            const docRef = await addDoc(collection(db, "dealerships"), {
                dealership: dealership,
                image: file,
                state: state
            })
            console.log("Document written with ID: ", docRef.id)
            setFile()
            setDealership('')
            setState('')
        } catch(error) {
            console.error('Error adding document: ', error)
        }
    }

    return (
        <div>
            <AdminNavbar />
            <div className="flex">
                <Sidebar />
                <div className="flex justify-center">
                    <div className="">
                        <h2 className="capitalize text-center text-2xl pl-72 font-bold mt-10">Add Dealerships below</h2>
                        <form onSubmit={(e) => e.preventDefault()} className="bg-white lg:w-96 drop-shadow-md mt-5 p-5 ml-64" action="">
                            <div className="mt-2">
                                <label htmlFor="dealership">Dealership</label>
                                <div>
                                    <input type="text"
                                        className="w-full mt-2 p-3 bg-slate-100 focus:outline-none focus:ring focus:ring-red-500"
                                        placeholder="dealership"
                                        value={dealership}
                                        onChange={(e) => setDealership(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="mt-5">
                                <label htmlFor="image" className="capitalize">dealership image</label>
                                <div className="bg-red-300 p-3 hover:bg-red-200 mt-2">
                                    <input type="file"
                                        className="w-full absolute cursor-pointer opacity-0 -z-1 mt-2 bg-slate-100 focus:outline-none"
                                        placeholder="dealership"
                                        accept=".jpg, .jpeg, .png"
                                        onChange={handleFileChange}
                                    />
                                    <label className="capitalize">Select a photo</label>
                                </div>
                                {/* <span className="imageName text-sky-300">{imageName}</span> */}
                            </div>
                            <div className="mt-5">
                                <label htmlFor="state">State</label>
                                <div>
                                    <input type="text"
                                        className="w-full mt-2 p-3 bg-slate-100 focus:outline-none focus:ring focus:ring-red-500"
                                        placeholder="Add State"
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="mt-5 flex justify-center">
                                <button onClick={addDealership} disabled={!canAdd} className="bg-red-500 hover:bg-red-400 text-white p-3 rounded-md">
                                    Add Dealership
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}