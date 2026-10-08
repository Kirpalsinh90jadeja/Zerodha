import {Link} from "react-router-dom"

import GeneralContext from "./GeneralContext"

import "./BuyActionWindow.css"

function BuyActionWindow({uid}) {
   
    const handleCancelClick = ()=>{
        GeneralContext.closeBuyWindow();
    }
    return ( 
        <div className="container" id="buy-window" draggable="true">
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input type="number" name="qty" id="qty" />
                    </fieldset>
                    <fieldset>
                        <legend>aniket</legend>
                        <input type="number" name="price" id="price" step="0.05" />
                    </fieldset>
                </div>
            </div>
            <div className="buttons">
                <span>Margin required 500
                </span>
                <div>
                    <Link className="btn btn-blue">Buy</Link>
                    <Link className="btn btn-grey" to="" onClick={handleCancelClick}>Cancle</Link>
                </div>
            </div>
        </div>
     );
}

export default BuyActionWindow;