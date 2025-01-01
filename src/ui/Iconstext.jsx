// import React from "react";

// const Iconstext = ({ img, title, text, className }) => {
//   return (
//     <div className={className}>
//       <img src={img} alt="" className="w-8 h-8" />
//       <p className="font-bold text-text-header text-base tracking-tight py-1">
//         {title}
//       </p>
//       <p className="text-sm text-text-light">{text}</p>
//     </div>
//   );
// };

// export default Iconstext;

import React from "react";

const Iconstext = ({
  img,
  title,
  text,
  containerClassName = "",
  imgClassName = "",
  titleClassName = "",
  textClassName = "",
}) => {
  return (
    <div className={containerClassName}>
      <img src={img} alt="" className={`w-8 h-8 ${imgClassName}`} />
      <p
        className={`font-bold text-[32px] py-2 text-text-header text-base tracking-tight ${titleClassName}`}
      >
        {title}
      </p>
      <p className={`text-base text-text-light ${textClassName}`}>{text}</p>
    </div>
  );
};

export default Iconstext;
