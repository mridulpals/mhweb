import { useEffect, useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import useMediaQuery from '@mui/material/useMediaQuery'

// Data
import { navItems } from './headerData';

// Components
import DropdownCustom from '../dropdown/DropdownCustom';
import AccordionCustom from '../accordion/AccordionCustom';

// Context
import { GeneralContext } from '../../context/GeneralContext';

// Assets
import styles from "./header.module.css";
import Logo from "../../public/assets/Logo.png";
//Fontawesome
import { faMagnifyingGlass, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Header = () => {

  const { windowWidth } = useContext(GeneralContext);
  // const matches = useMediaQuery('max-width: 992px')
  const [showNav, setShowNav] = useState(false);

  const router = useRouter();

  const openMobMenu = (e) => {
    e.preventDefault();
    setShowNav(!showNav)
  }

  useEffect(() => {
    setShowNav(false)
  }, [router])

  return (
    <header className={styles.headerContainer}>
      <div className={styles.nav + ' mainLayout'}>
        <Link href={'/'} passHref>
          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <Image src={Logo} />
            </div>
            <h1>Canadian Centre for Mindful Habitats</h1>
            <p>Vasudhaiva Kutumbakam</p>
          </div>
        </Link>
        <nav className={styles.menuContainer}>
          {
            windowWidth > 992 ?
              <>
                {
                  navItems.map((item, index) =>
                    item.dropdown ?
                      <DropdownCustom data={item} key={index} />
                      : (
                        <Link href={item.link} passHref key={index}>
                          <div className={styles.menuItem}>{item.name}</div>
                        </Link>
                      ))
                }

              </> :
              <>
                <button className={styles.hamMenuContainer} onClick={openMobMenu}>
                  <FontAwesomeIcon icon={showNav ? faXmark : faBars} className={styles.icon} />
                </button>
                {
                  showNav &&
                  <div className={styles.mobMenuContainer}>
                    {
                      navItems.map((item, index) =>
                        <AccordionCustom
                          key={index}
                          accques={item.name}
                          accans={item.dropdown}
                          link={item.link}
                          customClass={styles.menuAccordion}
                          customHeaderClass={styles.menuHeader}
                        />
                      )
                    }
                  </div>
                }
              </>
          }
        </nav>
        <div className={styles.searchContainer}><p><FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon} /></p></div>
      </div>
    </header >
  );
};

export default Header;
