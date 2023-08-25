import React from 'react';
import {useLocation} from "react-router-dom";
import CourseTicket from "./CourseTicket.jsx";

function Details() {

    const location = useLocation()
    const { courseTicket } = location.state

    return (
        <>
            <h1>Course Detail</h1>

            <CourseTicket
                courseTicket={courseTicket}
                showLink={false}
                key={courseTicket.shortName}
            />
        </>
    );
}

export default Details;