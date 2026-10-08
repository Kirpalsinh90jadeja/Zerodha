import Summary from "./Summary"
import Orders from "./Orders"
import Holdings from "./Holdings"
import Positions from "./Positions"
import Funds from "./Funds"
import Apps from "./Apps"
import { Route, Routes } from "react-router-dom";
import WatchList from "./WatchList"
import { GeneralContextProvider } from "./GeneralContext"
function Dashboard() {
    return ( 
        <div className="dashboard-container">
            <GeneralContextProvider>
                <WatchList />
            </GeneralContextProvider>
            
            <div className="content">
                
                <Routes >
                    <Route exact path="/" element={<Summary />} />
                    <Route exact path="/orders" element={<Orders />} />
                    <Route exact path="/holdings" element={<Holdings />} />
                    <Route exact path="/positions" element={<Positions />} />
                    <Route exact path="/funds" element={<Funds />} />
                    <Route exact path="/apps" element={<Apps />} />
                </Routes>
            </div>
        </div>
     );
}

export default Dashboard;