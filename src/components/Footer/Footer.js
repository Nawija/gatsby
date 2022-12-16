import * as React from "react"
import { Link } from "gatsby"

// import Fb from "../../assets/images/footer/fb.svg"
// import Instagram from "../../assets/images/footer/instagram.png"
// import Linkedin from "../../assets/images/footer/linkedin.png"
// import Github from "../../assets/images/footer/github.png"

const Footer = () => (
  <>
    <div className="relative w-full mt-20 bg-zinc-800 py-3 text-white">
      <p className=" text-center p-2 font-bold text-xl">
        Profeionalizm na kazdym kroku
      </p>
      <div className="flex items-start justify-around h-full p-3 py-0 flex-wrap">
        <div className="flex flex-col p-5">
          <p className="text-center w-full mb-2 font-bold">Social Media:</p>
          <p className="hover:underline">
            <Link to="https://www.facebook.com/">
              <span className="mr-2">IC</span>Facebook
            </Link>
          </p>
          <p className="hover:underline">
            <Link to="https://www.instagram.com/">
              <span className="mr-2">IC</span>Instagram
            </Link>
          </p>
          <p className="hover:underline">
            <Link to="https://www.facebook.com/">
              <span className="mr-2">IC</span>Linkedin
            </Link>
          </p>
          <p className="hover:underline">
            <Link to="https://www.facebook.com/">
              <span className="mr-2">IC</span>GitHub
            </Link>
          </p>
        </div>
        <div className="flex flex-col items-start justify-center p-5">
          <p className="text-center w-full mb-2 font-bold">Kontakt:</p>
          <p className="hover:underline">
            <Link to="mailto:konradwiel@interia.pl">
              <span className="mr-2">IC</span>konradwiel@interia.pl
            </Link>
          </p>
          <p className="hover:underline">
            <Link to="tel:570037077">
              <span className="mr-2">IC</span>(+48) 570-037-077
            </Link>
          </p>
        </div>
        <div className="flex flex-col items-start justify-center p-5">
          <p className="text-center w-full mb-2 font-bold" >Portfolio:</p>
          <p className="hover:underline">
            <Link to="tel:570037077">
              <span className="mr-2">IC</span>www.animals.com
            </Link>
          </p>
          <p className="hover:underline">
            <Link to="tel:570037077">
              <span className="mr-2">IC</span>www.kali-trans.pl
            </Link>
          </p>
          <p className="hover:underline">
            <Link to="tel:570037077">
              <span className="mr-2">IC</span>www.semiGold.pl
            </Link>
          </p>
          <p className="hover:underline">
            <Link to="tel:570037077">
              <span className="mr-2">IC</span>www.Art-trans.info.pl
            </Link>
          </p>
        </div>
        <div className="flex flex-col items-start justify-center p-5">
          <p className="text-center w-full mb-2 font-bold" >Certyfikaty:</p>
          <p className="hover:underline">
            <Link to="tel:570037077">
              <span className="mr-2">IC</span>GoldArea
            </Link>
          </p>
          <p className="hover:underline">
            <Link to="tel:570037077">
              <span className="mr-2">IMS</span>Cambrige
            </Link>
          </p>
        </div>
      </div>
      <p className="text-center text-sm text-zinc-400">Nagroda &copy;2022 <Link to="https://www.pagefolio.pl/">www.pagefolio.pl</Link></p>
    </div>
  </>
)

export default Footer
