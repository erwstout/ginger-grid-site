import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import '../Styles/Sidebar.css';

import GingerHead from '../Assets/img/ginger-head.png';
import GingerType from '../Assets/img/ginger-type.png';

class Sidebar extends Component {
  render() {
    return (
      <aside className="col-3">

          <div className="row">
            <div className="col-12 sidebar--row">
              <div className="logo-container">
                <img src={GingerHead} alt="Ginger" />
              </div>
              <div className="ginger-type">
                <img src={GingerType} alt="Ginger" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 sidebar--row">
              <ul className="sidebar">
                <li>
                  <Link to="/installation/">
                    Installation
                  </Link>
                </li>
                <li>
                  <Link to="/settings/">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link to="/containers/">
                    Containers
                  </Link>
                </li>
                <li>
                  <Link to="/rows/">
                    Rows
                  </Link>
                </li>
                <li>
                  <Link to="/columns/">
                    Columns
                  </Link>
                </li>
                <li>
                  <Link to="/block-grids/">
                    Block Grids
                  </Link>
                </li>
                <li>
                  <Link to="/visibility-classes/">
                    Visibility Classes
                  </Link>
                </li>
                <li>
                  <Link to="/offsets/">
                    Offsets
                  </Link>
                </li>
                <li>
                  <Link to="/extras/">
                    Extras
                  </Link>
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
