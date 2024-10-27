function Card({Icon, title, description}) {
    return (
        <div className=" h-60 flex flex-col justify-center items-center gap-2 p-2 border-2  rounded mb-3">
            <Icon className="text-5xl border-4 rounded-full p-2"/>
            <h2 className="font-bold underline md:text-2xl text-center">{title}</h2>
            <p className="text-justify">{description}</p>
        </div>
    )
}

function Icon(data) {
    return (
        <data />
    )
}

export default Card;