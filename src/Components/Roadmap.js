import Title from "./Title";
import Panel from "./Panel";
import { data2022, data2023 } from "./Data";

function Roadmap() {
  return (
    <div className="body-content roadmap" id="roadmap">
      <Title text="ROAD MAP" darkBg={true} />

      <div className="roadmap-list d-flex">
        <div className="roadmap-list-panel">
          <div className="panel-top-title">2022</div>

          <div className="panel-list-box">
            {data2022.map((data, id) => (
              <Panel id={id} key={`${id}`} data={data} />
            ))}
          </div>
        </div>

        <div className="roadmap-list-panel">
          <div className="panel-top-title">2023</div>

          <div className="panel-list-box">
            {data2023.map((data, id) => (
              <Panel key={`${id}`} id={id} data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
