import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name } = this.props;
    const { year } = this.props;
    const { country } = this.props;
    const { destination } = this.props;
    return (
      <div data-testid="mission-card" className="cardMission">
        <p data-testid="mission-name" className="text">
          <strong className="Cor">{ name }</strong>
        </p>
        <hr />
        <p data-testid="mission-year" className="text">
          <strong className="Cor">Ano: </strong>
          { year}
        </p>
        <p data-testid="mission-country" className="text">
          <strong className="Cor">Pais: </strong>
          {country}
        </p>
        <p data-testid="mission-destination" className="text">
          <strong className="Cor">Destino: </strong>
          { destination }
        </p>
      </div>);
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
