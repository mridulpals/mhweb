import { useEffect, useState } from 'react';
import Link from 'next/link';
import Dropdown from "react-bootstrap/Dropdown";

import styles from './dropdownCustom.module.css'


const DropdownCustom = (props) => {

  const { name, dropdown } = props.data;
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Dropdown
      className={props.innerDropdown ? styles.innerDropdown : styles.dropdownContainer}
      show={showMenu}
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      <Dropdown.Toggle className={props.innerDropdown ? styles.innerToggle : styles.dropwdownToggle}>
        {name}
      </Dropdown.Toggle>
      {
        dropdown && dropdown.length > 0 &&
        <Dropdown.Menu className={styles.menu + ` ${props.innerDropdown && styles.innerMenu}`}>
          {
            dropdown.map((item, index) =>
              item.dropdown ?
                (
                  <DropdownCustom data={item} key={index} innerDropdown />
                ) : (
                  <Link href={item.link} passHref key={index}>
                    <div className={styles.item}>{item.name}</div>
                  </Link>
                )
            )
          }
        </Dropdown.Menu>
      }
    </Dropdown>
  )
}

export default DropdownCustom
