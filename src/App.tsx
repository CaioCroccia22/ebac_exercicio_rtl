import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://s2-autoesporte.glbimg.com/H-lhFgCZfWn6guPS4cLPYo6SVIc=/0x0:1980x1195/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2024/d/q/GRRTZcToyhmar43bpSMA/batmovel-tumbler-dianteira-estatica.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
