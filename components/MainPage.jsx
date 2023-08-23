import React, {useEffect, useState} from 'react';
import axios from "axios";
import CourseValue from "./CourseValue.jsx";

const backendUrl = "https://webapi.developers.erstegroup.com/api/csas/public/sandbox/v2/rates/exchangerates?web-api-key=c52a0682-4806-4903-828f-6cc66508329e"

function MainPage() {

    const [courseValues, setCourseValues] = useState(null)

    useEffect(() => {
        axios.get(backendUrl).then(response => {
            setCourseValues(response.data)
        })
        
    }, []);
    
    return (
        <>
            <h1>Course values</h1>

            {courseValues && courseValues.map(courseValue => (
                <CourseValue
                    courseValue={courseValue}
                    showLink={true}
                    key={courseValue.shortName}
                />
                )
            )}

        </>
    );
}

export default MainPage;