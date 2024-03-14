import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiMinus } from "react-icons/fi";

type DataRowProps = {
  data: {
    id: string;
    start: string;
    end: string;
    imageUrl: string;
  };
};

export default function Datarow(props: DataRowProps) {
  const [id, setId] = useState(props.data.id || "");
  const [start, setStart] = useState(props.data.start || "");
  const [end, setEnd] = useState(props.data.end || "");

  return (
    <div className="grid data-row">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="123D783"
          onChange={(e) => setId(e.target.value)}
          value={id}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="0"
          onChange={(e) => setStart(e.target.value)}
          value={start}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="11:50"
          onChange={(e) => setEnd(e.target.value)}
          value={end}
        />
      </div>
      <div className="action-container">
        <img src="/Assets/image.jpg" className="row-image" />
        <div className="row-buttons">
          <button className="ud-arrow">
            <FiChevronUp />
          </button>
          <button className="min-button">
            <FiMinus />
          </button>
          <button className="ud-arrow">
            <FiChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
}
