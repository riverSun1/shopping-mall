import styles from "./eventBanner.module.css";

export const EventBanner = () => {
  return (
    <article
      className={styles.banner}
      style={{
        // backgroundImage: "url(/images/event.jpg" ,
        // width:'1500px', height:'1080px',
        backgroundSize: "200%",
        backgroundColor: "#FCD704"
      }}
    >
      <img src="/images/event.jpg" alt="banner" style={{height:'100%'}} />
      <div className={styles.right}>
        <img src="images/arrow.png" alt="right" style={{height:'35px'}} />
      </div>
      <div className={styles.left}>
        <img src="images/arrow.png" alt="left" style={{height:'35px', transform:'rotate(180deg)'}} />
      </div>
    </article>
  );
};