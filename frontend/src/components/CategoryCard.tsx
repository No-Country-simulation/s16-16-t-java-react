import React, { FunctionComponent } from 'react';

type CardProps = {
image: string,
title: string,
text: string
}

const CategoryCard: FunctionComponent<CardProps> = ({image, title, text}) => {
  return (
    <div className='w-[21.313rem] h-[24.5rem] flex flex-col justify-center items-start gap-[10px] py-[38px] px-[56px] border border-neutral-light rounded-lg'>
      <img src={image} className='w-52 h-40'/>
      <h3 className='self-stretch text-center text-xl leading-6 font-semibold' >{title}</h3>
      <p className='text-center self-stretch text-lg leading-[1.35rem] font-normal'>{text}</p>
    </div>
  );
}

export default CategoryCard;
