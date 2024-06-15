import React from "react";
import Leftbar from "./Leftbar";
import Main from "./Main";
import "./App.css";
import { SearchProvider } from "./SearchContext";
const App = () => {
    return (
        <SearchProvider>
            <div>
                <h1 className="text-3xl font-bold text-green-800">Chat App</h1>
            </div>
            <div className="App">
                <div className="chatsidebar col-sm-4">
                    <Leftbar />
                </div>
                <div className="chatwindow col-sm-6" >    
                    <Main />
                </div>
            </div>
        </SearchProvider>
      
        
    );
}
export default App;