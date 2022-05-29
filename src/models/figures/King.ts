import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Corors";
import {Cell} from "../Cell";
import blackLogo from "../../assets/black-king.png";
import whiteLogo from "../../assets/white-king.png";


export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
        this.name = FigureNames.KING
    }

    canMove(target: Cell): boolean {
        return super.canMove(target);

    }
}