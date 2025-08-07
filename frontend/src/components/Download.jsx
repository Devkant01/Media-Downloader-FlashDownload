import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { Data, ShowFormat } from "./Atom";
import Formats from "./Formats";

function Download() {
    const data = useRecoilValue(Data);
    return (
        <div id="download" className={`bg-[var(--bg-color)] hidden flex-col min-h-screen h-auto max-h-max pt-7 overflow-x-hidden z-20`}>
            <h1 className="text-2xl md:text-6xl text-center p-4 mt-9 mb-1 ">DOWNLOAD</h1>
            <div id="container" className="w-full px-2 md:px-5 flex-grow flex flex-col">
                {(data.msg !== null) ? <Message /> : <Video />}
            </div>
        </div>
    )
}


function Video() {
    const setShow = useSetRecoilState(ShowFormat);
    const isTrue = useRecoilValue(ShowFormat);

    const data = useRecoilValue(Data);
    return (
        <div id="video" className="relative w-full md:h-[75vh] -z-0 flex md:flex-row flex-col justify-around">
            <video className="rounded-lg w-full md:w-[80%] z-0" controls muted>
                <source src={data.url} />
            </video>
            <div className="w-full md:w-[50%] flex flex-col justify-between">
                <div>
                    <h1 className="text-center w-full font-bold md:text-xl mb-1">{data.title}</h1>
                    <p className="text-center w-full mb-4">{data.description}</p>
                </div>
                {isTrue &&
                    <Formats />
                }
                <button type="submit" onClick={() => setShow(true)} className="mt-6 md:mt-0 w-full bg-custom-gradient rounded-lg py-1 text-2xl text-white">Download</button>
            </div>
        </div>
    )
}

function Message() {
    const data = useRecoilValue(Data);
    return (
        <div className="flex-grow h-full text-center text-3xl text-red-400 underline flex justify-center items-center ">
            {data.msg}
        </div>
    )
}
export default Download;