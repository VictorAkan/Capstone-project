export const Filter = ({ dArray,showAll,filterDealerships }) => {
    return (
        <div>
            <div className="mt-7 flex space-x-6 justify-center">
                {dArray && <button onClick={showAll} className="text-xl hover:text-slate-600 font-bold">All</button>}
                {dArray.map(dealership => (
                    <button onClick={() => filterDealerships(dealership._document.data.value.mapValue.fields.state.stringValue)} className="text-xl hover:text-slate-600 font-bold" key={dealership.id} >
                        {dealership._document.data.value.mapValue.fields.state.stringValue}
                    </button>
                ))}
            </div>
        </div>
    )
}