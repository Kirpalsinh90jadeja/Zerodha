import { useEffect, useState } from "react";
import axios from "axios";
function Positions() {

  const [allPostions, setAllPositions] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:4002/allPositions").then((res)=>{
      setAllPositions(res.data)
    })
  }, [])
  return (
    <>
     <h1>Posotions ({allPostions.length})</h1>
    <div className="order-table">
      <table>
        <tr>
          <th>Instrument</th>
          <th>Qty.</th>
          <th>Avg. cost</th>
          <th>LTP</th>
          <th>P&L</th>
          <th>Net chg.</th>
          <th>Day chg.</th>
        </tr>
        {allPostions.map((stock, index) => {
          const CurValue = stock.price * stock.qty;
          const isProfit = CurValue - stock.avg * stock.qty >= 0.0;
          const profClass = isProfit ? "profit" : "loss";
          const dayClass = stock.isLoss ? "loss" : "profit";
          return (
            <tr key={index}>
              <td>{stock.product}</td>
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
              <td>{Number(stock.avg).toFixed()}</td>
              <td>{Number(stock.price).toFixed(2)}</td>
              <td className={profClass}>
                {(Number(CurValue) - Number(stock.avg) * stock.qty).toFixed(2)}
              </td>
              <td className={dayClass}>{stock.day}</td>
            </tr>
          );
        })}
      </table>
    </div>
    </>
  );
}

export default Positions;
