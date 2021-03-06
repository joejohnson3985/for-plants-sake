import React, { Component } from 'react';
import Ratings from 'react-ratings-declarative';
import noPhoto from '../../Media/no-photo.png';
import './ExpandedTrail.scss'
import { getMyHikes } from '../../APICalls'


export class ExpandedTrail extends Component {
  constructor() {
    super()
    this.state = {trail: {}}
  }

  componentDidMount() {
    this.getAllTrailInfo(this.props.match.params.id)
  }

  handleClick = (e) => {
    window.history.back()
  }

  getAllTrailInfo = (id) => {
    getMyHikes(id)
    .then(result => this.setState({trail: result.trails[0]}))
  }  

  render() {
    const { name, difficulty, stars, starVotes, length, imgMedium, summary, conditionStatus, conditionDetails, conditionDate, low, ascent, descent, high, url } = this.state.trail
    const image = imgMedium || noPhoto
    const bg = {backgroundImage: `url(${image})`}
    const diff = `https://cdn.apstatic.com/img/diff/${difficulty}.svg`
    return (
      <div className='trail-overlay'>
        <div className='expanded-trail'>
          <section className='main-img' style={bg}>
            <article className='img-overlay'>
              <h1>{name}</h1>
              <Ratings rating={stars} widgetRatedColors='#df7975' title={starVotes}>
                <Ratings.Widget widgetDimension="25px"/>
                <Ratings.Widget widgetDimension="25px"/>
                <Ratings.Widget widgetDimension="25px"/>
                <Ratings.Widget widgetDimension="25px"/>
                <Ratings.Widget widgetDimension="25px"/>
              </Ratings>
            </article>
          </section>
          <section className='trail-description'>
            <article className='basic-info'>
              <img src={diff} alt={difficulty}/>
              <p>{stars} stars from {starVotes} votes</p>
              <p>{length} miles</p>
            </article>
            <article className='condition-elevation'>
              <div  className='conditions'>
                <h1>Conditions: {conditionStatus} </h1>
                <p>{conditionDetails}</p>
                <p>{conditionDate}.</p>
              </div>
              <div>
                <h1>Elevation</h1>
                <p>Ascent: {ascent} ft.</p>
                <p>Descent: {descent} ft.</p>
                <p>Highest Point: {high} ft.</p>
                <p>Lowest Point: {low} ft.</p>
              </div>
            </article>
            <article>
              <p>{summary}</p>
            </article>
            <article className='buttons-row'>
              <a href={url} target="_blank"  rel="noopener noreferrer">
                <button >
                  REI
                </button>
              </a>
              <button onClick={() => this.handleClick()}>x</button>
            </article>          
          </section>
        </div>
      </div>
    )
  }
}

export default ExpandedTrail;