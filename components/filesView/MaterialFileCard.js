import React,{useState} from 'react'
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import InsertDriveFileRounded from '@mui/icons-material/InsertDriveFileRounded'

const MaterialFileCard = ({ name, id ,cookies}) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const pdfFile = `${process.env.url}api/v1/courses/exams/63ffebc34bef8c7adbf0b482`
    const file = '../../media/ECE312C Control Systems (1) Course Specs 221CBL.pdf'
    //const [counter, setCounter] = React.useState(0);
    const handleView = () => {

    };
    const handleDelete = async () => {
        try {
            const resp = await fetch(
                `${process.env.url}api/v1/courses/original-courses/deleteMaterials/${cookies.original_id}/${id}`,
                {
                    method: "GET",
                    headers: {
                        //"Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: "Bearer " + cookies.token,
                    },
                }
            );
            const r = await resp.json();
            console.log(r);
            console.log(id);
        } catch (e) {
            console.log(e);
        }
       // setCounter(counter+1);
        window.location.reload(true);
    }
    //const type = 'pdf'
    return (
        <div className=' fileCard relative bottom-10'>
            <div className="fileCard--top  relative left-2" onClick={handleView}>
                <InsertDriveFileRounded className='text-zinc-600' style={{ fontSize: 140}} />

            </div>

            {/*pdfFile && (
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
                    <Viewer fileUrl={pdfFile}
                        plugins={[defaultLayoutPluginInstance]}></Viewer>
                </Worker>
            )*/}
            <div className="fileCard--bottom relative left-20">
                <p>{name}</p>
            </div>
            <button class="flex justify-center align-center bg-zinc-600 hover:bg-red-900 
            text-white font-bold py-2 px-4 rounded-full absolute left-16 top-70 w-32 h-10"
                onClick={handleDelete}>
                Delete
            </button>
        </div>

    )
}

export default MaterialFileCard
