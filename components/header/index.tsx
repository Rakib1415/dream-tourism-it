import { getLogoUrlPath } from "@/apiServices/menu";
import { BASE_URL } from "@/constant/constants";
import Image from "next/image";
import Link from "next/link";
import CurrencyMegaMenu from "./CurrencyMegaMenu";
import HeaderSearch from "./HeaderSearch";
import MainMenu from "./MainMenu";
import MobileMenu from "./MobileMenu";

const Header = async ({ navbar }: { navbar: any }) => {
  const data = await getLogoUrlPath();

  return (
    <>
      <header className={`header bg-white ${navbar ? "is-sticky" : ""}`}>
        <div className="header__container px-30 sm:px-20">
          <div className="row justify-between items-center">
            <div className="col-auto header_logo_left_space">
              <div className="d-flex items-center">
                <Link href="/" className="header-logo mr-20">
                  (
                  <Image
                    style={{ width: "60px", height: "60px" }}
                    src={`${BASE_URL}/${data?.general_settings[0].favicon}`}
                    width={128}
                    height={128}
                    alt="logo"
                  />
                  )
                </Link>
                {/* End logo */}
                {/* <HeaderSearch /> */}
                {/* End logo */}({" "}
                <div className="header-menu">
                  <div className="header-menu__content">
                    <MainMenu style="text-dark-1" />
                  </div>
                </div>
                ){/* End header-menu */}
              </div>
              {/* End d-flex */}
            </div>

            {/* End col */}

            <div className="col-auto">
              <div className="d-flex items-center">
                <HeaderSearch />
                <div className="row x-gap-20 items-center xxl:d-none">
                  <CurrencyMegaMenu textClass="text-dark-1" />
                  {/* End Megamenu for Currencty */}

                  {/* Start vertical devider*/}
                  <div className="col-auto">
                    <div className="w-1 h-20 bg-white-20" />
                  </div>
                  {/* End vertical devider*/}
                </div>
                {/* End language and currency selector */}

                {/* Start mobile menu icon */}
                <div className="d-none xl:d-flex x-gap-20 items-center pl-30 text-dark-1">
                  {/* <div>
                    <Link
                      href="/login"
                      className="d-flex items-center icon-user text-inherit text-22"
                    />
                  </div> */}
                  {/* <div>
                    <MobileCurrencyMenu/>
                  </div> */}
                  <div>
                    <button
                      className="d-flex items-center icon-menu text-inherit text-20"
                      data-bs-toggle="offcanvas"
                      aria-controls="mobile-sidebar_menu"
                      data-bs-target="#mobile-sidebar_menu"
                    />

                    <div
                      className="offcanvas offcanvas-start  mobile_menu-contnet"
                      //   tabIndex="-1"
                      id="mobile-sidebar_menu"
                      aria-labelledby="offcanvasMenuLabel"
                      data-bs-scroll="true"
                    >
                      <MobileMenu />
                      {/* End MobileMenu */}
                    </div>
                  </div>
                </div>
                {/* End mobile menu icon */}
              </div>
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End header_container */}
      </header>
      {/* End Header */}
    </>
  );
};

export default Header;
