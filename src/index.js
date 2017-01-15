import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match } from 'react-router';

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
  <BrowserRouter>
    <div className="GingerGrid">
      <main className="container">
        <div className="row row--justify-content-center">
          <Sidebar />
          <article className="col-7 content-column">
            <Match exactly pattern="/" component={Home} />
            <Match pattern="/home" component={Home} />
            <Match pattern="/installation" component={Home} />
            <Match pattern="/settings" component={Settings} />
            <Match pattern="/columns" component={Columns} />
            <Match pattern="/containers" component={Containers} />
            <Match pattern="/rows" component={Rows} />
            <Match pattern="/block-grids" component={BlockGrids} />
            <Match pattern="/visibility-classes" component={VisibilityClasses} />
            <Match pattern="/offsets" component={Offsets} />
            <Match pattern="/extras" component={Extras} />
          </article>
        </div>
      </main>
    </div>

  </BrowserRouter>,
  document.getElementById('root')
);
