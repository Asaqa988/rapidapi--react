// import React, { useEffect, useState } from "react";

// function App() {
//   const [myArray, setMyArray] = useState([]);

//   const url =
//     "https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr";
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "2e1e746db6mshd128c21570d6267p15a324jsneb4ddada8719",
//       "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
//     },
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     fetch(url, options)
//       .then((response) => response.json())
//       .then((data) => {
//         setMyArray(data.d);
//         console.log(data.d);
//       });
//   };

//   return (
//     <div className="App">
//       {myArray.map((element, index) => (
//         <div key={index}>
//           {element.i && element.i.height && <h1>{element.i.height}</h1>}
//           {element.i && element.i.imageUrl && (
//             <img src={element.i.imageUrl} alt="" />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
