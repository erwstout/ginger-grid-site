import React, { Component } from 'react';
import '../Styles/Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <aside className="col-3">

          <div className="row">
            <div className="col-12 sidebar--row">
              <div className="logo-container">
                <img src="http://gingergrid.com/ginger-head.png" alt="Ginger" />
              </div>
              <div className="ginger-type">
                <img src="http://gingergrid.com/ginger-type.png" alt="Ginger" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 sidebar--row">
              <ul className="sidebar">
                <li>
                  <a href="/installation/">
                    Installation
                  </a>
                </li>
                <li>
                  <a href="/settings/">
                    Settings
                  </a>
                </li>
                <li>
                  <a href="/containers/">
                    Containers
                  </a>
                </li>
                <li>
                  <a href="/rows/">
                    Rows
                  </a>
                </li>
                <li>
                  <a href="/columns/">
                    Columns
                  </a>
                </li>
                <li>
                  <a href="/block-grids/">
                    Block Grids
                  </a>
                </li>
                <li>
                  <a href="/visibility-classes/">
                    Visibility Classes
                  </a>
                </li>
                <li>
                  <a href="/offsets/">
                    Offsets
                  </a>
                </li>
                <li>
                  <a href="/extras/">
                    Extras
                  </a>
                </li>
                <li>
                  <a href="https://github.com/erwstout/ginger/issues">
                    Issues
                  </a>
                </li>
              </ul>
            </div>
          </div>

      </aside>
    );
  }
}

export default Sidebar;
