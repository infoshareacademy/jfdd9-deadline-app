import React, {Component} from 'react';
import {withCatPage} from "./CatPage/context/CatPageContext";
import CatContainer from "./List/CatContainer";
import './FavoriteCats/FavoriteCats.css'

class FavoriteCats extends Component{
  render() {
    return(
      <div className="favoriteCats">
        <h1>Ulubione koty</h1>

        {this.props.cats && this.props.cats
          .filter( cat => this.props.favourite.includes(cat.id) )
          .map(element=>
            <CatContainer key={element.id} cat={element}/>
          )}

        {this.props.favourite.length === 0 ? <p>Żaden kot nie został polubiony.</p> : <p> </p>}

      </div>
    )
  }
}

export default withCatPage(FavoriteCats);