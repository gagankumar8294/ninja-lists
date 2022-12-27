import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/black_logo.png" alt="Ninja logo" width={80} height={77}/>
            </div>
            <Link className="links" href="/">Home</Link>
            <Link className="links" href="/about">About</Link>
            <Link className="links" href="/ninjas">Ninja Listing</Link>
        </nav>
    );
}

export default Navbar;