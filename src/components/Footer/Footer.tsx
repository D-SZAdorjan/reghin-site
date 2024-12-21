import React from 'react'
import GridRow from '../general/GridRow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

const Footer = ({ locale = "en" }: { locale?: string }) => {
  return (
    <footer>
      <section className="relative">
        <div className="container mx-auto border-b-2 border-slate-200">
          <GridRow className="w-full justify-end items-center my-5">
            <div className="flex-[0_0_auto] w-auto">
              <div className="flex items-center">
                <div className="footer-socials-title text-lg font-medium ms-2 5">
                  Check out:
                </div>
                <div className="footer-social-icons relative flex">
                  <Link
                    href="https://www.facebook.com/"
                    className="flex justify-center items-center ms-3"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="text-xl" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/"
                    className="flex justify-center items-center ms-3"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/"
                    className="flex justify-center items-center ms-3"
                  >
                    <FontAwesomeIcon icon={faYoutube} className="text-xl" />
                  </Link>
                </div>
              </div>
            </div>
          </GridRow>
        </div>
      </section>
      <section className="relative my-18">
        <div className="container mx-auto">
            <GridRow className="w-full justify-between items-start">
              <div className="flex-[0_0_auto] w-1/3 items-start">
                <h5 className="font-medium text-xl">ReghinTravel</h5>
              </div>
              <div className="flex-[0_0_auto] w-auto items-start">
                <h5 className="font-medium text-xl">Usefull Links</h5>
                <div className="mt-5">
                  <Link href="/" className="block font-normal">Home</Link>
                  <Link href="/" className="block font-normal">About</Link>
                  <Link href="/" className="block font-normal">Churches</Link>
                  <Link href="/" className="block font-normal">Locations</Link>
                </div>
              </div>
              <div className="flex-[0_0_auto] w-auto items-start">
                <h5 className="font-medium text-xl">Policies</h5>
                <div className="mt-5">
                  <Link href="/" className="block font-normal">Terms and Conditions</Link>
                  <Link href="/" className="block font-normal">Privacy Policy</Link>
                  <Link href="/" className="block font-normal">Cookie Policy</Link>
                </div>
              </div>
              <div className="flex-[0_0_auto] w-1/3 items-start">
                <h5 className="font-medium text-xl">Contact</h5>
              </div>
            </GridRow>
        </div>
      </section>
      <section className="relative my-5">
        <div className="container mx-auto border-t-2 border-slate-200">
          <div className="py-5">
            <GridRow className="justify-between items-center w-full">
              <div className="flex-[0_0_auto] w-auto">
                <div>© Copyright ReghinTravel 2024.</div>
              </div>
              <div>
                <Link href="/" className="flex-[0_0_auto] w-auto">
                  Terms and Conditions
                </Link>
                <Link href="/" className="flex-[0_0_auto] w-auto ms-3">
                  Privacy Policy
                </Link>
                <Link href="/" className="flex-[0_0_auto] w-auto ms-3">
                  Cookie Policy
                </Link>
              </div>
            </GridRow>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer