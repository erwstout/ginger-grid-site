import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from './Home';
import Settings from './Components/Settings';
import Sidebar from './Components/Sidebar';
import Columns from './Components/Columns';
import Containers from './Components/Containers';
import Rows from './Components/Rows';
import BlockGrids from './Components/BlockGrids';
import VisibilityClasses from './Components/VisibilityClasses';
import Offsets from './Components/Offsets';
import Extras from './Components/Extras';

import './index.css';
import './Styles/ginger.css';

ReactDOM.render(
  <Router>
    <div className="GingerGrid">
      <main className="container">
        <div className="row row--justify-content-center">
          <Sidebar />
          <article className="col-7 content-column">
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/installation" component={Home} />
            <Route path="/settings" component={Settings} />
            <Route path="/columns" component={Columns} />
            <Route path="/containers" component={Containers} />
            <Route path="/rows" component={Rows} />
            <Route path="/block-grids" component={BlockGrids} />
            <Route path="/visibility-classes" component={VisibilityClasses} />
            <Route path="/offsets" component={Offsets} />
            <Route path="/extras" component={Extras} />
          </article>
        </div>
      </main>
    </div>

  </Router>,
  document.getElementById('root')
);
