import React from 'react';

export const Container = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
	return (
		<section className='mx-[14px] lg:mx-14'>
			{children}
		</section>
	);
};
