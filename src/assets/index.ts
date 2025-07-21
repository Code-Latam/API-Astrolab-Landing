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

import Design_document_api from "@/assets/icons/design_document_api.svg";
import Generate_docs_portals from "@/assets/icons/generate_docs_portals.svg";
import Invite_people_workspaces from "@/assets/icons/invite_people_workspaces.svg";
import Visualize_api_workflows from "@/assets/icons/visualize_api_workflows.svg";

import Close_the_sale from "@/assets/icons/close_the_sale.svg";
import Invite_customer_workspace from "@/assets/icons/invite_customer_workspace.svg";
import Create_apis_workflows from "@/assets/icons/create_apis_workflows.svg";
import Create_workspace_customer from "@/assets/icons/create_workspace_customer.svg";



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
import EmilyJohnson from "@/assets/photos/EmilyJohnson.jpg";
import MichaelBrown from "@/assets/photos/MichaelBrown.jpg";
import HeroDesktop from "@/assets/photos/hero-2.webp";
import HeroDesktopJpg from "@/assets/photos/hero-2.jpg";
import HeroMobileJpg from "@/assets/photos/sky.jpg";
import HeroMobile from "@/assets/photos/sky.webp";

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
  Design_document_api,
  Generate_docs_portals,
  Invite_people_workspaces,
  Visualize_api_workflows,
  Close_the_sale,
  Invite_customer_workspace,
  Create_apis_workflows,
  Create_workspace_customer
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
  EmilyJohnson,
  MichaelBrown,
  HeroDesktop,
  HeroMobile,
  HeroDesktopJpg,
  HeroMobileJpg,
};
