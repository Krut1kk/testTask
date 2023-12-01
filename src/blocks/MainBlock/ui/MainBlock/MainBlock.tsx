// widgets
import { Header } from "@/widgets/Header";
// ui
import { Button } from "@/shared/ui/Button";
// styles
import styles from "./MainBlock.module.scss";

export const MainBlock = () => {
  return (
    <>
      <Header />
      <div className={styles.MainBlock}>
        <div className={styles.center}>
          <div className={styles.title}>
            Test assignment for front-end developer
          </div>
          <div className={styles.subtitle}>
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </div>
          <div>
            <Button>Sign up</Button>
          </div>
        </div>
      </div>
    </>
  );
};
