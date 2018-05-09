import React, { Component } from 'react'

const CatPageContext = React.createContext();

export const CatPageConsumer = CatPageContext.Consumer

export class CatPageProvider extends Component {
  state = {
    favourite: [],

    makeCatFavorite: (cat) => {
      this.setState( {favourite: this.state.favourite.concat(cat)})
      console.log(this.state.favourite)

    }

  };

  render() {
    return (
      <CatPageContext.Provider value={this.state}>
        {this.props.children}
      </CatPageContext.Provider>
    )
  }
}

export function withCatPage(Component) {
  function CatPageAwareComponent(props) {
    return (

      <CatPageConsumer>
        {
          state => <Component {...props} {...state}/>
        }
      </CatPageConsumer>
    )
  }
  CatPageAwareComponent.displayName= `CatPageAware(${Component.displayName || Component.name || 'Component'}`;

  return CatPageAwareComponent
}