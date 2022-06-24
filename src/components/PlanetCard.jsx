import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="card">
        <p data-testid="planet-name" className="text">{ planetName }</p>
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          className="imagePlanet"
        />
      </div>);
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};

export default PlanetCard;
