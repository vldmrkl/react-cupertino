import React from 'react';
import PropTypes from 'prop-types';
import AccordionItem from '../AccordionItem';
import './Accordion.css';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState({ activeId: id });
  }

  render() {
    const { items } = this.props;
    const { activeId } = this.state;
    return (
      <ul className="rc-accordion">
        {items.map(item => (
          <AccordionItem
            title={item.title}
            key={item.id}
            description={item.description}
            onClick={() => {
              this.handleChange(item.id);
            }}
            icon={item.icon}
            active={activeId === item.id}
          />
        ))}
      </ul>
    );
  }
}

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      icon: PropTypes.PropTypes.string
    })
  ).isRequired
};

export default Accordion;
