// import logo1 from "../assets/Coppsary_Purple.png";

// const AuthImagePattern = ({ title, subtitle }) => {

//   const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];

//   return (
//     <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
//       <div className="max-w-md text-center">
//         {/* Grid of logos */}
//         <div className="grid grid-cols-3 gap-3 mb-8">
//           {logos.map((logo, i) => (
//             <img
//               key={i}
//               src={logo1}
//               alt= {`logo ${i + 1}`}
//               className={`aspect-square rounded-2xl p-2 bg-primary/10 object-contain ${i % 2 === 0 ? "animate-pulse" : ""
//                 }`}
//             />
//           ))}
//         </div>

//         <h2 className="text-2xl font-bold mb-4">{title}</h2>
//         <p className="text-base-content/60">{subtitle}</p>
//       </div>
//     </div>
//   );
// };

// export default AuthImagePattern;

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-primary/10 ${i % 2 === 0 ? "animate-pulse" : ""
                }`}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;