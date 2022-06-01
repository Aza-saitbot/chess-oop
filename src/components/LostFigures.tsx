import React, {FC} from 'react';
import {Figure} from "../models/figures/Figure";

type LostFiguresProps={
    title:string
    figures:Figure[]
}

const LostFigures:FC<LostFiguresProps> = ({figures,title}) => {
    return (
        <div className="lost">
            <h3>{title}</h3>
            {figures.map(f=>
            <div key={f.id}>
                {f.name} {f.logo && <img width={20} height={20} src={f.logo}/>}
            </div>
            )}
        </div>
    );
};

export default LostFigures;