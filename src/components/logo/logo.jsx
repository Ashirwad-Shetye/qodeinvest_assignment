import Image from "next/image";

const Logo = () => (
	<div className='flex items-center gap-2 animate-in fade-in duration-500'>
		<Image
			src='/Logo_CMPremium.png'
			alt='Logo'
			width={200}
            height={200}
            className="h-10 w-auto"
            unoptimized
            loading="lazy"
		/>
	</div>
);

export default Logo;