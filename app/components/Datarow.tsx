import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiMinus } from "react-icons/fi";

type DataRowProps = {
  data: {
    id: string;
    start: string;
    end: string;
    iUrl: string;
  };
  handleRemoveClickListner: any;
  handleMoveDown: any;
  handleMoveUp: any;
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
          placeholder="00:00"
          onChange={(e) => setStart(e.target.value)}
          value={start}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="00:00"
          onChange={(e) => setEnd(e.target.value)}
          value={end}
        />
      </div>
      <div className="action-container">
        <div>
          <iframe className="row-iframe" src={props.data.iUrl}></iframe>
        </div>
        <div className="row-buttons">
          <button
            className="ud-arrow"
            onClick={() => props.handleMoveUp(props.data.id)}
          >
            <FiChevronUp />
          </button>
          <button
            className="min-button"
            onClick={() => props.handleRemoveClickListner(props.data.id)}
          >
            <FiMinus />
          </button>
          <button
            className="ud-arrow"
            onClick={() => props.handleMoveDown(props.data.id)}
          >
            <FiChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
}
