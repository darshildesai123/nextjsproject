import Link from "next/link";
import styles from '../styles/index.module.css'

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className={styles.menu_bar}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/product">Product</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
