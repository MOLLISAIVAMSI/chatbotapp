import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Home from './Home';
import Top from './Top';
import Sidebar from './Sidebar';
import Menubar from './Menubar';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import appRouter from './Approuter';
function App() {
    return (
        <div>
            <div className="source" style={{'position':'fixed','bottom':'0','width':'100%','z-index':'1'}}>
                <header>
                    <Top className="fixed-top"/>        
                </header>
                <Menubar className="fixed-menubar"/>
                <Sidebar className="fixed-sidebar"/>
            </div> 
            <RouterProvider router={appRouter}/>
            
        </div>
    )
}

export default App;