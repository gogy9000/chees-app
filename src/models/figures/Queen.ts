import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../../assets/black-quen.png.png";
import whiteLogo from "../../assets/white-quen.png.png";

export class Queen extends Figure{

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo=color===Colors.BLACK?blackLogo:whiteLogo
        this.name= FigureNames.QUEEN
    }
}

