import React from 'react';

export const BackgroundNav = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
	return (
		<div className='flex place-items-center bg-[#222a32b6] h-16 rounded-2xl cursor-pointer'>
			{children}
		</div>
	);
};
