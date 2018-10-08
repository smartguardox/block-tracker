import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Select from 'react-select';

import { CURRENCIES } from '../constants';

const OPTIONS = CURRENCIES.map(currency => ({
  value: currency.symbol,
  label: `${currency.name} (${currency.symbol})`,
}));

class CurrencySelector extends PureComponent {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(option) {
    const { onChange } = this.props;

    onChange(option.value);
  }

  render() {
    const { className, defaultValue } = this.props;

    return (
      <Select
        className={className}
        classNamePrefix={className}
        controlShouldRenderValue
        defaultValue={OPTIONS.find(option => option.value === defaultValue)}
        isClearable={false}
        isSearchable={false}
        onChange={this.handleChange}
        options={OPTIONS}
      />
    );
  }
}

CurrencySelector.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

CurrencySelector.defaultProps = {
  className: undefined,
};

const mapStateToProps = state => ({
  defaultValue: state.preferences.currency,
});

export default connect(mapStateToProps)(CurrencySelector);
