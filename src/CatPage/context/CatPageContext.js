import React, {Component} from 'react'
import firebase from 'firebase'


const CatPageContext = React.createContext();
export const CatPageConsumer = CatPageContext.Consumer;

export class CatPageProvider extends Component {


  state = {
    cats: [],
    fetching: false,
    error: null,
    favourite: null,
    adoptionRequests: [],


    toggleCatFavorite: (cat) => {
      // this.setState({
      //   favourite: this.state.favourite.includes(cat.id) ? this.state.favourite.filter(catId => catId !== cat.id) : this.state.favourite.concat(cat.id)
      // })
      this.setState({
        fetching: true
      })
      this.state.favourite &&
      this.state.favourite[cat.id] === true ?
        firebase.database().ref('/favourite/' + firebase.auth().currentUser.uid + '/' + cat.id,).remove() :
        firebase.database().ref('/favourite').child(firebase.auth().currentUser.uid).child(cat.id).set(true)
    },


    toggleCatAdopted: (cat) => {
      this.setState({
        fetching: true
      })
      this.state.adoptionRequests &&
      this.state.adoptionRequests.some((adoptedCat) => adoptedCat.catId === cat.id) ?
        firebase.database().ref('/adoptionRequests/' + cat.id).remove() :
        firebase.database().ref('/adoptionRequests').child(cat.id).set({
          catId: cat.id,
          accepted: false,
          user: firebase.auth().currentUser.uid,
        })
    },

    updateShelterAdoption: (cat) => {
      this.setState({
        fetching: true
      })
      this.state.adoptionRequests &&
      this.state.adoptionRequests.some((adoptedCat) => adoptedCat.catId === cat.id) ?
        firebase.database().ref('/adoptionRequests/' + cat.id).update({
          accepted: true,
        })
        : ''
    },
    updateShelterRejection: (cat) => {
      this.setState({
        fetching: true
      })
      this.state.adoptionRequests &&
      this.state.adoptionRequests.some((adoptedCat) => adoptedCat.catId === cat.id) ?
        firebase.database().ref('/adoptionRequests/' + cat.id).remove()
        : ''
    }
  };


  handleCatsSnapshot = snapshot => {
    const cats = [];
    snapshot.forEach(
      element => {
        cats.push({
          id: element.key,
          ...element.val()
        })
      }
    )
    this.setState({
      cats: cats,
      fetching: false
    })
  }

  handleFavoriteSnapshot = snapshot => {
    snapshot.val() !== null && firebase.auth().currentUser ?
      this.setState({
          favourite: snapshot.val()[firebase.auth().currentUser.uid],
          fetching: false
        }
      ) : this.setState({
        favourite: null,
        fetching: false
      })
  }
  handleAdoptedSnapshot = snapshot => {
    const adopted = [];
    snapshot.val() !== null && Object.entries(snapshot.val()).forEach(
      ([id, value]) => {
        adopted.push({
          catId: id,
          accepted: value.accepted,
          user: value.user,
        })
      }
    )
    this.setState({
        adoptionRequests: adopted,
        fetching: false
      }
    )
  }

  componentDidMount() {
    this.unsubscribeCats = firebase.database().ref('/cats')
    this.unsubscribeAdoptionRequests = firebase.database().ref('/adoptionRequests')
    this.unsubscribeCats.on('value', this.handleCatsSnapshot);
    this.unsubscribeAdoptionRequests.on('value', this.handleAdoptedSnapshot)
    this.unsubscribeFavourite = firebase.database().ref('/favourite')
    this.unsubscribeFavourite.on('value', this.handleFavoriteSnapshot)

    this.setState({
      fetching: true,
      error: null
    });
  }

  componentWillUpdate() {
  }

  componentWillUnmount() {
    this.unsubscribeCats.off('value', this.handleCatsSnapshot)
    this.unsubscribeAdoptionRequests.off('value', this.handleAdoptedSnapshot)
    this.unsubscribeFavourite.off('value', this.handleFavoriteSnapshot)
  }

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
          ({...state}) => <Component {...props} {...state}/>
        }
      </CatPageConsumer>
    )
  }

  CatPageAwareComponent.displayName = `CatPageAware(${Component.displayName || Component.name || 'Component'}`;

  return CatPageAwareComponent
}