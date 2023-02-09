import React from "react"
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Subject ({myGPA, GPA, selectGPA}) {
    return (
        <ul>
            {myGPA.map((sub, index) => {
                    return (
                        <div className="p-4" key={index}>
                            <li>{sub.sub} ({sub.code}) - {sub.credit} Credits</li>
                            <Select options={GPA} placeholder="Select Grade" onChange={selectGPA(sub)} />
                        </div>
                    )}
            )}
        </ul>
    )
}


// import React from "react"
// import Select from 'react-select'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Subjects.css'

// export default function Subject ({myGPA, GPA, selectGPA}) {
//     return (
//         <ul className="subject-list">
//             {myGPA.map((sub, index) => {
//                     return (
//                         <div className="subject-item p-4" key={index}>
//                             <li className="subject-title">{sub.sub} ({sub.code}) - {sub.credit} Credits</li>
//                             <Select 
//                                 className="select-gpa"
//                                 options={GPA} 
//                                 placeholder="Select Grade" 
//                                 onChange={selectGPA(sub)} 
//                             />
//                         </div>
//                     )}
//             )}
//         </ul>
//     )
// }


