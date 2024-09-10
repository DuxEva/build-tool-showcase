import "./styles.scss";
import _ from "lodash";
import toolsData from "./data/tools.json";
console.log(toolsData);

function renderTools(tools) {
  const content = document.getElementById("grid-system");
  console.log(content);
  content.innerHTML = _.map(
    tools,
    (tool) => `<div class="basic-card basic-card-light">
                <div class="card-content">
                    <span class="card-title">${tool.title} </span>
                    <p class="card-text">
                        ${tool.description}
                    </p>
                </div>
            </div>`
  ).join("");
}

renderTools(toolsData);
