export const List = ({ list }) => {
    return (
        <div>
            <div className="px-32">
                <div className="grid mt-10 gap-6 grid-cols-3">
                    {list.map(singleList => (
                        <div key={singleList.id} className="bg-white p-3 drop-shadow-md">
                            <img src={singleList._document.data.value.mapValue.fields.image.stringValue} alt="alt-image" />
                            <div className="flex mt-6">
                                <h2 className="text-xl text-slate-500">{singleList._document.data.value.mapValue.fields.dealership.stringValue}</h2>
                                <p className="ml-auto">{singleList._document.data.value.mapValue.fields.state.stringValue}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}