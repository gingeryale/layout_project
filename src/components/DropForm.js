import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./DropForm.css";

function DropForm() {
    const [myFiles, setMyFiles] = useState([]);
    let disabled = false;
    let uploadMsg = `Click to upload or drag and drop here`;
    const limitFile = 6;


    const onDrop = useCallback(acceptedFiles => {
        setMyFiles([...myFiles, ...acceptedFiles])
    }, [myFiles])

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
    })

    const removeFile = file => () => {
        const newFiles = [...myFiles]
        newFiles.splice(newFiles.indexOf(file), 1)
        setMyFiles(newFiles)
    }

    const removeAll = () => {
        setMyFiles([])
    }

    const files = myFiles.slice(0, limitFile).map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes{" "}
            <button onClick={removeFile(file)}>Remove File</button>
        </li>
    ));

    const limitMsg = () => {
        console.log("limit");
        disabled = true;
        uploadMsg = `You've reached the limit of uploads`;
    }

    return (
        <section className="container">
            <aside>
                <h4>Files</h4>
                <ul>{files}</ul>
                {files.length >= limitFile && limitMsg()}
            </aside>
            <div>
                {files.length > 0 && <button onClick={removeAll}>Remove All</button>}
            </div>
            <div {...getRootProps({ className: "dropzone" })}>
                <input disabled={disabled} {...getInputProps()} />
                <p>{uploadMsg}</p>
            </div>
        </section>
    )
}

export default DropForm;