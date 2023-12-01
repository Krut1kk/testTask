// blocks
import { MainBlock } from "@/blocks/MainBlock";
import { UsersBlock } from "@/blocks/UsersBlock";
import { SignUpBlock } from "@/blocks/SignUpBlock";
// styles
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.App}>
      <MainBlock />
      <UsersBlock />
      <SignUpBlock />
    </div>
  );
};

export default App;
