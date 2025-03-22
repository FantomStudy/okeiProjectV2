import styles from "./HomeDirections.module.css";
import girl from "/girl.png"; // Веб-разработка
import graphic from "/prepod2.png"; // Графический дизайн
import motion from "/prepod3.png"; // Моушн-дизайн
import photo from "/prepod4.png"; // Фотосъемка
import video from "/prepod5.png"; // Видеосъемка
import vrar from "/prepod.png"; // VR/AR

export default function HomeDirections() {
  const [activeDirection, setActiveDirection] = useState("Веб-разработка");

  const directionImages = {
    "Веб-разработка": girl,
    "Графический дизайн": graphic,
    "Моушн-дизайн": motion,
    Фотосъемка: photo,
    Видеосъемка: video,
    "VR/AR": vrar,
  };

  const handleClick = (direction) => {
    setActiveDirection(direction);
  };

  const directions = [
    "Веб-разработка",
    "Графический дизайн",
    "Моушн-дизайн",
    "Фотосъемка",
    "Видеосъемка",
    "VR/AR",
  ];

  const itemHeight = 64; // Высота одного <p> (24px текста + 40px padding)
  const gap = 10; // Промежуток между элементами
  const topPosition = directions.indexOf(activeDirection) * (itemHeight + gap);

  return (
    <div className={styles.homeDirections}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper__photo}>
          <img src={directionImages[activeDirection]} alt={activeDirection} />
        </div>
        <div className={styles.wrapper__info}>
          {/* Фон */}
          <div
            className={styles.background}
            style={{
              top: `${topPosition}px`,
            }}
          ></div>
          {/* Индикатор */}
          <div
            className={styles.indicator}
            style={{
              top: `${topPosition}px`,
            }}
          ></div>
          {directions.map((direction) => (
            <p
              key={direction}
              className={activeDirection === direction ? styles.active : ""}
              onClick={() => handleClick(direction)}
            >
              {direction}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
