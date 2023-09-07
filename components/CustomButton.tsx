"use client";

import React from 'react'
import Image from 'next/image';
import { CustomButtonProps } from '@/types';
const CustomButton = ({title,btnType,containerStyles,handleClick}:CustomButtonProps) => {
  return (
<>
    <div>
      <button
      disabled={false}
      type={btnType ||"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
      >
    <span className={`flex-1`}>
    {title}
        </span>
      </button>
    </div>
    <div>
        
    </div>
</>
  )
}

export default CustomButton
