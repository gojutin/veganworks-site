// import { useRef, useState, useEffect } from "react";

// export const useSearch = (data: any[], fields: string[]) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredData, setFilteredData] = useState([]);
//   const ref = useRef(null);

//   useEffect(() => {
//     setFilteredData(
//       data.filter(item => {
//         const d = fields.reduce((accum, field) => {
//           if (item[field].toLowerCase().includes(searchTerm.toLowerCase())) {
//             return true;
//           } else {
//             return false;
//           }
//         });
//         console.log(d);
//         return d;
//       })
//     );
//   }, [data, fields, searchTerm]);

//   if (ref.current) {
//     ref.current.addEventListener("input", e => {
//       setSearchTerm(e.target.value);
//     });
//   }

//   return [ref, filteredData];
// };
