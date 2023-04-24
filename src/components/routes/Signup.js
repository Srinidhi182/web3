// import React from "react";
// import { useState } from "react";
// import ".Signup.css";

// const strengthLabels = ["weak", "medium", "strong"];

// export const Signup = () => {
//   const [strength, setStrength] = useState("");
//   const getStrength = (password: string) => {
//     let strengthIndicator: number = -1,
//       upper = false,
//       lower = false,
//       numbers = false;
//     for (let index = 0; index < password.length; index++) {
//       const char = password.charCodeAt(index);
//       if (!upper && char >= 65 && char <= 90) {
//         upper = true;
//         strengthIndicator++;
//       }
//       if (!numbers && char >= 48 && char <= 57) {
//         numbers = true;
//         strengthIndicator++;
//       }
//       if (!numbers && char >= 97 && char <= 122) {
//         lower = true;
//         strengthIndicator++;
//       }
//     }
//     setStrength(strengthLabels[strengthIndicator]);
//   };
//   const handleChange = (event) => getStrength(event.target.value);
//   return (
//     <>
//       <input
//         name="password"
//         spellCheck="false"
//         className="control"
//         type="password"
//         placeholder="Password"
//         onChange={handleChange}
//       />
//       <div className={`bars ${strength}`}>
//         <div></div>
//       </div>
//       <div className="strength">{strength && <>{strength} password</>}</div>
//     </>
//   );
// };

// export default Signup;
