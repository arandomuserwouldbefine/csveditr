export default function Header() {
  return (
    <header className="main-header">
      <div className="addNew-header">
        <button className="btn new-btn">New</button>
        <input type="text" placeholder="12424" />
      </div>
      <div className="flex-1 title-input">
        <input type="text" placeholder="TITLE is a title"/>
      </div>
      <div className="">
        <button className="btn copy-btn">Copy</button>
      </div>
    </header>
  );
}
