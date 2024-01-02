import Navbar from "@/componetns/Navbar";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from '../styles/index.module.css'

const Errorpage = () => {
  const router = useRouter();
  const handleInput = () => {
    router.push("/");
  };

  // Redirect to home page after 5 seconds if no input is provided
  //   useEffect(() => {
  //     setTimeout(handleInput, 5000);
  //   }, []);

  useEffect(() => {
    setTimeout(() => {
        router.push("/")
    },3000);
  }, []);
  return (
    <>
      <Navbar />
      <div id={styles.notfound}>
        <div className={styles.notfound}>
          <div className={styles.notfound_404}>
            <h1>404</h1>
          </div>
          <h2>WE are sorry, page not found!</h2>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          {/* <Link href="/">Back to HomePage</Link> */}
          {/* <a onClick={() => router.push("/")}>Back to HomePage</a> */}
          <a onClick={handleInput}>Back to HomePage</a>
        </div>
      </div>
    </>
  );
};

export default Errorpage;
