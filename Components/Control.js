

import React, { Component } from 'react';
import Sort from './Sort';
import Search from './Search';
class Control extends Component {
    render() {
        return (
            <div className="wrap">
               <Search />
               <Sort />
            </div>
		);
    }
}

export default Control;
