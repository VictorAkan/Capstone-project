import { Navbar } from "../../components/Navbar"
import { Filter } from "../../components/dealership/Filter"
import { List } from "../../components/dealership/List"
import { collection, getDocs } from "firebase/firestore"
import { useEffect,useState } from "react"
import { db } from "../../firebase/firebase-config"
import { DLoader } from "../../components/dealership/Loader"

export const Dealership = () => {
    const [dArray, setDArray] = useState([])
    const [list, setList] = useState(dArray)
    const [loading, setLoading] = useState(false)

    const getDealerships = async () => {
        setLoading(true)
        const querySnapshot = await getDocs(collection(db, "dealerships"))
        console.log(querySnapshot.docs);
        setLoading(false)
        setDArray(querySnapshot.docs)
        setList(querySnapshot.docs)
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    }

    const showAll = () => {
        setList(dArray)
    }

    const filterDealerships = (state) => {
        const newValue = dArray.filter(dealership => 
            dealership._document.data.value.mapValue.fields.state.stringValue === state
        )
        setList(newValue)
    }

    useEffect(() => {
        getDealerships()
    }, [])

    if (loading === true) {
        return (
            <DLoader />
        )
    }

    return (
        <main>
            <Navbar />
            <div>
                <div className="p-5 px-20">
                    <h2 className="text-center text-2xl tracking-widest font-bold text-slate-600">List of Dealerships</h2>
                    <div className="block">
                        <Filter showAll={showAll} filterDealerships={filterDealerships} dArray={dArray} />
                        <List list={list} />
                    </div>
                </div>
            </div>
        </main>
    )
}