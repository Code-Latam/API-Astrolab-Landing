// ICONS
import AddCoupon from "@/assets/icons/add-coupon.svg";
import Bullhorn from "@/assets/icons/bullhorn.svg";
import Checkmark from "@/assets/icons/checkmark.svg";
import Chevron from "@/assets/icons/chevron.svg";
import Coupon from "@/assets/icons/coupon.svg";
import Email from "@/assets/icons/email.svg";
import Growth from "@/assets/icons/growth.svg";
import HamburgerMenu from "@/assets/icons/hamburger-menu.svg";
import Language from "@/assets/icons/language.svg";
import Magnifier from "@/assets/icons/magnifier.svg";
import Moon from "@/assets/icons/moon.svg";
import Refund from "@/assets/icons/refund.svg";
import Spinner from "@/assets/icons/spinner.svg";
import Sun from "@/assets/icons/sun.svg";
import Wallet from "@/assets/icons/wallet.svg";
import Website from "@/assets/icons/website.svg";
import XMark from "@/assets/icons/x-mark.svg";

// LOGOS
import ElColombiano from "@/assets/logos/el-colombiano.svg";
import ElEspectador from "@/assets/logos/el-espectador.svg";
import ElTiempo from "@/assets/logos/el-tiempo.svg";
import Facebook from "@/assets/logos/facebook.svg";
import Instagram from "@/assets/logos/instagram.svg";
import LinkedIn from "@/assets/logos/linkedIn.svg";
import NoticiasCaracol from "@/assets/logos/noticias-caracol.svg";
import RcnRadio from "@/assets/logos/rcn-radio.svg";
import Twitter from "@/assets/logos/x-twitter.svg";

// PHOTOS
import AndresGomez from "@/assets/photos/andres-gomez.jpg";
import DanielaRestrepo from "@/assets/photos/daniela-restrepo.jpg";
import ErnestoMartinez from "@/assets/photos/ernesto-martinez.jpg";
import HeroDesktop from "@/assets/photos/hero-2.webp";
import HeroDesktopJpg from "@/assets/photos/hero-2.jpg";
import HeroMobileJpg from "@/assets/photos/customer-redeeming-coupon-at-clothing-store.jpg";
import HeroMobile from "@/assets/photos/customer-redeeming-coupon-at-clothing-store.webp";

export const icons: Record<
  string,
  ((_props: astroHTML.JSX.SVGAttributes) => any) & ImageMetadata
> = {
  AddCoupon,
  Bullhorn,
  Checkmark,
  Chevron,
  Coupon,
  Email,
  Growth,
  Language,
  HamburgerMenu,
  Magnifier,
  Moon,
  Refund,
  Spinner,
  Sun,
  Wallet,
  Website,
  XMark,
};

export const logos: Record<
  string,
  ((_props: astroHTML.JSX.SVGAttributes) => any) & ImageMetadata
> = {
  ElColombiano,
  ElEspectador,
  ElTiempo,
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  NoticiasCaracol,
  RcnRadio,
  Twitter,
};

export const photos: Record<string, ImageMetadata> = {
  AndresGomez,
  DanielaRestrepo,
  ErnestoMartinez,
  HeroDesktop,
  HeroMobile,
  HeroDesktopJpg,
  HeroMobileJpg,
};
