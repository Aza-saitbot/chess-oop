import React, {FC, useEffect, useState} from 'react';
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";
import {Cell} from "../models/Cell";
import {Player} from "../models/Player";

interface BoardProps {
    board:Board
    setBoard:(board:Board)=>void
    currentPlayer:Player|null
    swapPlayer:()=>void
}


const BoardComponent:FC<BoardProps> = ({setBoard,board,swapPlayer,currentPlayer}) => {

    const [selectedCell,setSelectedCell]=useState<Cell|null>(null)

    function click(cell:Cell) {
        if (selectedCell && selectedCell !== cell && selectedCell?.figure?.canMove(cell)){
            selectedCell.moveFigure(cell)
            setSelectedCell(null)
            swapPlayer()
            updateBoard()
        }else {
            if (cell.figure?.color === currentPlayer?.color){
                setSelectedCell(cell)
            }

        }
    }

    useEffect(()=>{
        highLightCells()
    },[selectedCell])

    function highLightCells() {
        board.highLightCells(selectedCell)
        updateBoard()
    }

    function updateBoard() {
        const newBoard=board.getCopyBoard()
        setBoard(newBoard)
    }

    return (
       <div>
<h3>Текущий игрок {currentPlayer?.color}</h3>
           <div className="board">
               {board.cells.map((row)=>
                   <React.Fragment>
                       {row.map(cell=>
                           <CellComponent cell={cell}
                                          key={cell.id}
                                          click={click}
                                          selected={cell.x === selectedCell?.x && selectedCell?.y === cell.y}
                           />
                       )}
                   </React.Fragment>
               )}
           </div>
       </div>
    );
};

export default BoardComponent;