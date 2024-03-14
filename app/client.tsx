import "./styles.css";
import { createRoot } from "react-dom/client";
import "./main.css";
import Header from "./components/Header";
import Datarow from "./components/Datarow";

const data = [
  {
    id: "123D783",
    start: "10:50",
    end: "11:40",
    imageUrl: "/Assets/image.png",
  },
  {
    id: "123D784",
    start: "11:10",
    end: "12:18",
    imageUrl: "/Assets/image.png",
  },
  { id: "123D785", start: "9:00", end: "23:35", imageUrl: "/Assets/image.png" },
  {
    id: "123D786",
    start: "01:20",
    end: "05:50",
    imageUrl: "/Assets/image.png",
  },
];

function App() {
  return (
    <main className="main">
      <Header />
      <div className="grid row-header">
        <span>ID</span>
        <span>Start</span>
        <span>End</span>
        <span></span>
      </div>
      <div className="data-row-container">
        {data.map((rowData) => (
          <Datarow data={rowData} key={rowData.id} />
        ))}
      </div>
    </main>
  );
}

createRoot(document.getElementById("app")!).render(<App />);
