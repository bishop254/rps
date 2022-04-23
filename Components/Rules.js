import Image from "next/image";
import styles from "../styles/Rules.module.css";

const Rules = ({ mode, isOpen, toggleModal }) => {
  return (
    <>
      {isOpen && (
        <div className={styles.rules}>
          <div className={styles.rulesHeader}>
            <h3>RULES</h3>
            <Image
              src="/images/icon-close.svg"
              width={20}
              height={20}
              onClick={() => toggleModal()}
              alt="Close-btn"
            />
          </div>
          {mode ? (
            <div className={styles.rulesImage}>
              <Image
                src="/images/image-rules-bonus.svg"
                width={100}
                height={100}
                alt="Advanced-rules"
              />
            </div>
          ) : (
            <div className={styles.rulesImage}>
              <Image
                src="/images/image-rules.svg"
                width={100}
                height={100}
                alt="Normal-rules"
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Rules;
