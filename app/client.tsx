import "./styles.css";
import { createRoot } from "react-dom/client";
import "./main.css";
import Header from "./components/Header";
import Datarow from "./components/Datarow";
import { useState } from "react";
import { FiMoreHorizontal, FiPlus } from "react-icons/fi";

type RowData = {
  id: string;
  start: string;
  end: string;
  iUrl: string;
};

const data = [
  {
    id: "123D783",
    start: "10:50",
    end: "11:40",
    iUrl: "/Assets/image.jpg",
  },
  {
    id: "123D784",
    start: "11:10",
    end: "12:18",
    iUrl: "/Assets/image01.jpg",
  },
  {
    id: "123D785",
    start: "9:00",
    end: "23:35",
    iUrl: "/Assets/image02.jpg",
  },
  {
    id: "123D786",
    start: "01:20",
    end: "05:50",
    iUrl: "/Assets/image03.jpg",
  },
];

function App() {
  const [rowData, setRowData] = useState<RowData[]>(data);

  const generateRandomId = (length: number) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters.charAt(randomIndex);
    }
    return id;
  };

  const handleRemoveClickListner = (id: string) => {
    const newData = rowData.filter((row) => {
      return row.id !== id;
    });
    setRowData(newData);
  };

  const handleMoveDown = (id: string) => {
    const index = rowData.findIndex((data) => data.id == id);
    if (index === -1 || index === rowData.length - 1) {
      return;
    }
    const afterindex = index + 1;
    const dupData = [...rowData];
    const temp = dupData[index];
    dupData[index] = dupData[afterindex];
    dupData[afterindex] = temp;
    setRowData(dupData);
  };

  const handleMoveUp = (id: string) => {
    const index = rowData.findIndex((data) => data.id === id);
    if (index === -1 || index === 0) {
      return;
    }
    const prevIndex = index - 1;

    const updatedData = [...rowData];
    const temp = updatedData[index];
    updatedData[index] = updatedData[prevIndex];
    updatedData[prevIndex] = temp;

    setRowData(updatedData);
  };

  const handleRowAddClick = () => {
    const newData = {
      id: generateRandomId(7),
      start: "",
      end: "",
      iUrl: "",
    };
    const data = [...rowData];
    data.push(newData);
    setRowData(data);
  };

  const handleDupData = () => {
    const endTime = rowData[rowData.length - 1].end;
    const newData = {
      id: generateRandomId(7),
      start: endTime,
      end: "",
      iUrl: "",
    };
    const data = [...rowData];
    data.push(newData);
    setRowData(data);
  };

  const updateMainData = (data: RowData) => {
    const newData = [...rowData];
    const index = newData.findIndex((row) => row.id == data.id);
    newData[index] = data;
    setRowData(newData);
  };

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
        {rowData.map((rowData) => (
          <Datarow
            data={rowData}
            key={rowData.id}
            handleRemoveClickListner={(id: string) =>
              handleRemoveClickListner(id)
            }
            handleMoveDown={(id: string) => handleMoveDown(id)}
            handleMoveUp={(id: string) => handleMoveUp(id)}
            updateMainData={updateMainData}
          />
        ))}
      </div>
      <div className="footer-btns">
        <button onClick={handleRowAddClick}>
          <FiPlus />
        </button>
        <button onClick={handleDupData}>
          <FiMoreHorizontal />
        </button>
      </div>
    </main>
  );
}

createRoot(document.getElementById("app")!).render(<App />);
