import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1600px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <div className="flex justify-center items-center">
          <Link href="/">
            
              <Image
                src="/logo.svg"
                alt="logo"
                width={118}
                height={18}
                className="object-contain"
              />
            
          </Link>
        </div>

        <div>
          <CustomButton
            title="Sign in"
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
