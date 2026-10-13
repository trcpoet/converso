import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/images/logo.svg" alt="Converso logo" width={46} height={44} />
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <NavItems />
        {/* TODO: swap for Clerk's SignInButton / UserButton once auth is added */}
        <button className="btn-signin">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
