import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps { }
const Logo: React.FC<HeaderProps> = () => {
    return (
        <Link href="/">
            <Image
                src="/images/logo/logo.svg"
                alt="logo"
                width={220}
                height={75}
                style={{ width: '220', height: '75' }}
                quality={100}
                priority={true}
                className='dark:hidden'
            />
            <Image
                src="/images/logo/DarkModeLogo.svg"
                alt="logo"
                width={220}
                height={75}
                style={{ width: '220', height: '75' }}
                quality={100}
                className='dark:block hidden'
            />
        </Link>
    );
};

export default Logo;
