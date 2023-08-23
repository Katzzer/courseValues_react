import React from 'react';
import {useLocation} from "react-router-dom";
import CourseValue from "./CourseValue.jsx";

function Details() {

    const location = useLocation()
    const { courseValue } = location.state

    return (
        <>
            <h1>Course Detail</h1>

            <CourseValue
                courseValue={courseValue}
                showLink={false}
                key={courseValue.shortName}
            />
        </>
    );
}

export default Details;