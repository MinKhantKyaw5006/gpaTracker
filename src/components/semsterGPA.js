// import React from "react"
// import 'bootstrap/dist/css/bootstrap.min.css';
// function SemsterGPA({semsters}) {

//     return (
//         <ul>
//             {semsters.map((sem, index) => {
//                 return (
//                     <div key={index}>
//                         <h4>Semster Name - {sem.sem}</h4>
//                         <h4>Average GPA - {sem.avgGPA}</h4>
//                         {sem.myGPA.map((sub, index) => (
//                             <div key={index}>
//                                 <h4>Subject Details</h4>
//                                 <span>{sub.sub} --- </span>
//                                 <span>{sub.code} --- </span>
//                                 <span>{sub.grade} GPA</span>
//                             </div>
//                         ))}
//                         <hr></hr>
//                     </div>
//                 )}
//             )}
//         </ul>
//     )
// }

// export default SemsterGPA



// import React from "react"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './SemesterGPA.css';

// function SemsterGPA({semsters}) {

//     return (
//         <ul>
//             {semsters.map((sem, index) => {
//                 return (
//                     <div key={index}>
//                         <h4>Semster Name - {sem.sem}</h4>
//                         <h4>Average GPA - {sem.avgGPA}</h4>
//                         <table className="table table-bordered">
//                             <thead>
//                                 <tr>
//                                     <th>Subject</th>
//                                     <th>Code</th>
//                                     <th>Grade (GPA)</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {sem.myGPA.map((sub, index) => (
//                                     <tr key={index}>
//                                         <td>{sub.sub}</td>
//                                         <td>{sub.code}</td>
//                                         <td>{sub.grade}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                         <hr></hr>
//                     </div>
//                 )}
//             )}
//         </ul>
//     )
// }

// export default SemsterGPA






// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./SemesterGPA.css";

// function SemsterGPA({ semsters }) {
//     return (
//         <ul>
//             {semsters.map((sem, index) => {
//                 return (
//                     <div key={index}>
//                         <h4>Semester Name - {sem.sem}</h4>
//                         <h4>Average GPA - {sem.avgGPA}</h4>
//                         <table>
//                             <thead>
//                                 <tr>
//                                     <th>Subject</th>
//                                     <th>Code</th>
//                                     <th>Grade</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {sem.myGPA.map((sub, index) => (
//                                     <tr key={index}>
//                                         <td>{sub.sub}</td>
//                                         <td>{sub.code}</td>
//                                         <td>{sub.grade} GPA</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                         <hr />
//                     </div>
//                 );
//             })}
//         </ul>
//     );
// }

// export default SemsterGPA;



import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SemesterGPA.css";
function SemsterGPA({ semsters }) {

    return (
        <ul className="ulboard">
            {semsters.map((sem, index) => {
                return (
                    <table className="table" key={index}>
                        <thead>
                            <tr>
                                <th colSpan="4">Semester Name - {sem.sem}</th>
                            </tr>
                            <tr>
                                <th colSpan="4">Average GPA - {sem.avgGPA}</th>
                            </tr>
                            <tr>
                                <th >Subject Name</th>
                                <th>Subject Code</th>
                                <th>Credit</th>
                                <th>Grade</th>


                            </tr>
                        </thead>
                        <tbody>
                            {sem.myGPA.map((sub, index) => (
                                <tr key={index}>
                                    <td>{sub.sub}</td>
                                    <td>{sub.code}</td>
                                    <td>{sub.credit}</td>
                                    <td>{sub.grade} GPA</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
            })}

        </ul>
    )
}

export default SemsterGPA
