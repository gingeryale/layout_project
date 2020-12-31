import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./DropForm.css";
import "./Checkbox.css";

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
        <li className="file" key={file.path}>
            {file.path}
            <span className="removeBtn" onClick={removeFile(file)}>remove</span>
        </li>
    ));

    const limitMsg = () => {
        disabled = true;
        uploadMsg = `You've reached the limit of uploads`;
    }

    return (
        <section className="drag_drop_form">
            <div className="drag_drop_header">Upload music <span>4-6 songs</span></div>
            <div className="flex_height_wrap">
                <article>
                    <ul>{files}</ul>
                    {files.length >= limitFile && limitMsg()}
                </article>
                <div {...getRootProps({ className: "drop_zone" })}>
                    <input disabled={disabled} {...getInputProps()} />
                    <p className="drop_zone_msg">{uploadMsg}</p>
                </div>
            </div>
            <form>
                <div class="checkbox_item">
                    <input type="checkbox" id="rights" class="visually-hidden" />
                    <label for="rights">I have full rights for the music.</label>

                    <div class="control_box"></div>
                </div>
                <div class="checkbox_item">
                    <input type="checkbox" id="material" class="visually-hidden" />
                    <label for="material">None of the songs are a cover of another artis's material.</label>

                    <div class="control_box"></div>
                </div>
                <div class="checkbox_item">
                    <input type="checkbox" id="platform" class="visually-hidden" />
                    <label for="platform">The music is clear for use in any web platform, including YouTube monetization.</label>

                    <div class="control_box"></div>
                </div>
            </form >
            <div className="submit_btn">
                <button>Submit</button>
            </div>
        </section >
    )
}

export default DropForm;