type Props = {
  step: number;
  currentStep: number;
};
function CartIndicator({ step, currentStep }: Props) {
  const isActiveOrPrevious: boolean = step <= currentStep;
  return (
    <div
      className={`${isActiveOrPrevious ? "bg-yellow-600 text-white" : "text-yellow-600"} w-[50px] h-[50px] rounded-full flex items-center justify-center border border-slate-800 `}
    >
      {step}
    </div>
  );
}

export default CartIndicator;

// import React, { useState } from 'react';
// import Cart from './Cart';
// import Checkout from './Checkout';
// import OrderCompleted from './OrderCompleted';

// interface StepIndicatorProps {
//   step: number;
//   label: string;
// }

// const StepIndicator: React.FC<StepIndicatorProps> = ({ step, label }) => {
//   const isActive = step === 1; // Adjust as needed based on your steps
//   const indicatorStyle: React.CSSProperties = {
//     width: '20px',
//     height: '20px',
//     borderRadius: '50%',
//     backgroundColor: isActive ? 'blue' : 'gray',
//     marginRight: '10px',
//   };

//   return (
//     <div style={indicatorStyle}>
//       <p style={{ color: 'white', textAlign: 'center' }}>{label}</p>
//     </div>
//   );
// };
