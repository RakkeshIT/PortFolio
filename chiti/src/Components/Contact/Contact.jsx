import Style from "./Contact.module.css";
import Lottie from "lottie-react";
import Contacts from "../../animation/Contact.json";
import { ContactImage } from "../../../public/ContactData.js";
const Contact = () => {
  const Card = ContactImage;
  return (
    <>
      <div className={`${Style.C_Container}`}>
        <div className={`${Style.Title}`}>
          <h1>Contact Me</h1>
        </div>

        {/* Flex */}
        <div className={`${Style.Flex_Container}`}>
          <div className={`${Style.Image}`}>
            <Lottie
              animationData={Contacts}
              loop={true}
              style={{
                height: "500px",
                width: "500px",
              }}
            />
          </div>
          <div className={`${Style.Content}`}>
            {Card.map((items) => (
              <div className={`${Style.Card}`} key={items.id}>
                <a href={items.link} rel="noopener noreferrer">
                  <img src={items.src} alt={items.alt} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
