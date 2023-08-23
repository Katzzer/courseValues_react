import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "../components/MainPage";
import Details from "../components/Details";

export const AppRouter = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/course-detail" element={<Details/>}/>
                </Routes>
            </BrowserRouter>
        </>)
}

export default AppRouter;