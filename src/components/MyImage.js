import React, { useState } from "react";
import styled from "styled-components";

// const MyImage = ({ imgs = [{ url: "" }] }) => {
//   const [mainImage, setMainImage] = useState(imgs[0]);

//   return (
//     <Wrapper>
//       <div className="grid grid-four-column">
//         {imgs.map((curElm, index) => {
//           return (
//             <figure>
//               <img
//                 src={curElm.url}
//                 alt={curElm.filename}
//                 className="box-image--style"
//                 key={index}
//                 onClick={() => setMainImage(curElm)}
//               />
//             </figure>
//           );
//         })}
//       </div>
//       {/* 2nd column  */}

//       <div className="main-screen">
//         <img src={mainImage.url} alt={mainImage.filename} />
//       </div>
//     </Wrapper>
//   );
// };

const MyImage=(props)=>{
  return  <Wrapper><div className="main-screen">
       <img src={props.imgs}/>
  </div>
  </Wrapper>
}
const Wrapper = styled.section`

    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  .main-screen {
    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;

    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default MyImage;
