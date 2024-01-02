import Navbar from "@/componetns/Navbar";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h1>This is a Contact page</h1>
        <Image
          src="https://thumbs.dreamstime.com/b/template-contacts-background-contact-information-lettering-contact-us-notebook-office-work-desk-template-118309216.jpg"
          width="500"
          height="300"
          alt="aboutImage"
        ></Image>
      </div>
    </>
  );
};

export default Contact;
