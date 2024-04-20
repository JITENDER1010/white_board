import React, { useRef, useState } from "react";
import "./index.css";
import WhiteBoard from "../../components/whiteboard";

const RoomPage = () => {
 
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);

    const [tool, setTool] = useState("pencil");
    const[color , setColor] = useState("black");
    const [elements , setElements] = useState([]);
    const [history , setHistory] = useState([]);
     const handleClearCanvas = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.fillRect = "white";
        ctxRef.current.clearRect(0 , 0 , canvasRef.current.width , canvasRef.current.height);
        setElements([]);
     }
     const undo = () => {
     setHistory((prevHistory) => [...prevHistory , elements[elements.length - 1]]);
     setElements(
        (prevElements) => prevElements.slice(0 , prevElements.length -1)
        
     )
     }
     const redo = () => {
        setElements((prevElements) => [...prevElements , history[history.length - 1]]);
        setHistory(
           (prevHistory) => prevHistory.slice(0 , prevHistory.length -1)
           
        )
        }
    return (
        <div className="row">
            <h1 className="text-center pt-4  py-4">White board sharing app <span className="text-primary"> [User Online-0]</span></h1>
            <div className="col-md-10 mx-auto gap-3 px-5 mb-3 d-flex align-items-center justify-content-between">
                <div className="d-flex col-md-2 justify-content-between gap-1 ">
                    <div className="d-flex gap-1 align-items-center ">
                        <label htmlFor="pencil">Pencil</label>
                        <input type="radio"
                         id="pencil" 
                         name="tool" 
                         checked = {tool === "pencil"}
                         className="mt-1"
                         value="pencil"
                          onChange={(e) => setTool(e.target.value)} 
                          />
                    </div>
                    <div className="d-flex gap-1 align-items-center">
                        <label htmlFor="line">Line</label>
                        <input type="radio" 
                        id="line" 
                        name="tool" 
                        checked = {tool === "line"}
                        className="mt-1"
                        value="line"
                         onChange={(e) => setTool(e.target.value)}
                          />
                    </div>
                    <div className="d-flex gap-1 align-items-center">
                        <label htmlFor="rect">Rectangle</label>
                        <input
                        type="radio" 
                        id="rect"
                        name="tool" 
                        checked = {tool === "rect"}
                        className="mt-1"
                        value="rect"
                        onChange={(e) => setTool(e.target.value)} />
                    </div>
                </div>
           
            <div className="col-md-3 mx-auto">
                <div className="d-flex  align-items-center justify-content-center ">
                    <label htmlFor="color">Select Color:</label>
                    <input 
                    type="color" 
                    id="color"
                    className="mt-1 ms-3 border-2"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    
                    />
                </div>
                </div>
                <div className="col-md-3 d-flex gap-2">
                    <button className="btn btn-primary mt-1" 
                    disabled = {elements.length === 0}
                    onClick={() => undo()}


                    >Undo</button>
                    <button className="btn btn-outline-primary mt-1"
                     disabled = {history.length < 1}
                     onClick={() => redo()}
                     >Redo</button>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-danger" onClick = {handleClearCanvas}>Clear Canvas</button>
                </div>
            </div>
            <div className="col-md-10 mx-auto mt-4 canvas-box">
                <WhiteBoard canvasRef = {canvasRef} ctxRef = {ctxRef} 
                elements = {elements}
                setElements = {setElements}
                color = {color}
                tool = {tool}
                />
            </div>
        </div>
    );
};

export default RoomPage;
