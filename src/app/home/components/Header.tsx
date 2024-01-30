// components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';
import Logo from "../../../../public/whiteLogo.png";
import stayIcon from "../../../../public/Home/icon1.png";
import flightIcon from "../../../../public/Home/icon2.png";
const Header: React.FC = () => {
    return (
        <header className="text-white p-6 flex items-center justify-between ">
            <div className="flex items-center space-x-4">
                <Link href="/find-flight" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                    <Image src={flightIcon} alt='icon' />
                    Find flights
                </Link>
                <Link href="/find-stay" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                    <Image src={stayIcon} alt='icon' />
                    Find stays
                </Link>
            </div>
            <div>
                <Link href="/">
                    <Image alt="Golobe" src={Logo} />
                </Link>
            </div>
            <div className="flex items-center space-x-4">
                <button className="px-4 py-2 rounded">
                    <Link href="/sign-in">
                        Login
                    </Link>
                </button>
                <button style={{ color: "black", borderRadius: "8px" }} className="bg-white  px-6 p-3 ">
                    <Link href="/sign-up">
                        Sign up
                    </Link>
                </button>
            </div>
        </header>
    );
};

export default Header;
