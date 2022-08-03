import Image from 'next/image';
import logo from '@/images/logo.svg';
import styles from '@/styles/Navbar.module.scss';

export const Navbar = () => (
  <nav className="flex justify-between h-[10rem] items-center px-[6rem]">
    <div className='flex gap-2 items-center justify-center'>
      <div className={styles.logo}>
        <Image
          src={logo.src}
          alt="StellarSOL Logo"
          width="100%"
          height="100%"
        />
      </div>
      <h1 className='text-white text-[2.4rem] font-bold'>StellarSOL</h1>
    </div>
    <div className={styles.links}>
      <a href="#">How to use</a>
      <a href="#">Features</a>
      <a href="#">Testimonials</a>
      <a href="#" className={styles.button}>
          <div>
            <p>Add to Chrome</p>
          </div>
        </a>
    </div>
  </nav>
);