import { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp, FiMinus } from "react-icons/fi";
import PartySocket from "partysocket";

const socket = new PartySocket({
  host: "192.168.42.217:1999",
  room: "fasdf",
})
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
  updateMainData: any;
};

export default function Datarow(props: DataRowProps) {
  const [id, setId] = useState(props.data.id || "");
  const [start, setStart] = useState(props.data.start || "");
  const [end, setEnd] = useState(props.data.end || "");
  const handleChange = (value: string | undefined) => {
    if (value === undefined) return;

    socket.send(value);
  };
  const onIncomingMessage = (message: MessageEvent) => {
    setId(message.data);
  };

  useEffect(() => {
    socket.addEventListener("message", onIncomingMessage);

    return () => socket.removeEventListener("message", onIncomingMessage);
  }, []);
  useEffect(() => {
    const data = props.data;
    data.start = start;
    data.end = end;
    data.id = id;
    props.updateMainData(data);
  }, [id, start, end]);

  return (
    <div className="grid data-row">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="123D783"
          onChange={(e) => {
            socket.send(`id:${e.target.value}`)
            setId(e.target.value)
          }}
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
          <iframe className="row-iframe" height="10px" width="5px" src={props.data.iUrl}></iframe>
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
