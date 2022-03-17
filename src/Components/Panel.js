import Plus from "../images/plus.svg";
import Minus from "../images/minus.svg";
import PanelList from "./PanelList";
import { useState } from "react";

function Panel({ data, id }) {
  const [display, setDisplay] = useState(false);

  function toggle(e) {
    const dropBox = e.target.closest(".panel-header").nextElementSibling;

    setDisplay(!display);
    dropBox.style.maxHeight = !display ? dropBox.scrollHeight + "px" : "";
  }

  return (
    <div key={`${data.title}`} className="panel">
      <div className="panel-header d-flex">
        <h4 className="panel-header-title">{data.title}</h4>
        <img
          className="panel-icon"
          onClick={toggle}
          src={display ? Minus : Plus}
          alt="panel-icon"
        />
      </div>
      <div className="collapse">
        <div className="">{data.duration}</div>

        <ul className="panel-list">
          {data.lists.map((list, id) => (
            <PanelList key={`${id}`} list={list} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Panel;
