import { useEffect, useState } from "react";
import axios from "axios";

function Holdings() {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4002/allHoldings").then((res)=>{
      setAllHoldings(res.data)
    })
  }, []);
  return (
    <>
      <h3>Holdings({allHoldings.length})</h3>
      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          {allHoldings.map((stock, index) => {
            const CurValue = stock.price * stock.qty;
            const isProfit = CurValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{Number(stock.avg).toFixed()}</td>
                <td>{Number(stock.price).toFixed(2)}</td>{" "}
                <td>{Number(CurValue).toFixed(2)}</td>
                <td className={profClass}>
                  {(Number(CurValue) - Number(stock.avg) * stock.qty).toFixed(
                    2
                  )}
                </td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
        <div className="row">
          <div className="col">
            <h5>
              29,875.<span>55</span>
              {""}
            </h5>
            <p>Total investment</p>
          </div>
          <div className="col">
            <h5>
              29,875.<span>55</span>
              {""}
            </h5>
            <p>Current value</p>
          </div>
          <div className="col">
            <h5>
              29,875.<span>55</span>
              {""}
            </h5>
            <p>P&L</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Holdings;
