import { mapProps } from 'recompose';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';

import { TIME_PERIOD } from '../../../constants';
import { media } from '../../../styles/util';
import AddressMetrics from '../../metrics/components/address-metrics';
import Card from '../../../components/card';
import ChartsContainer from '../../../components/charts-container';
import Fills from '../../fills/components/fills';
import PageLayout from '../../../components/page-layout';

const AddressPage = ({ address }) => (
  <>
    <Helmet>
      <title>{`Address: ${address}`}</title>
    </Helmet>
    <PageLayout title={`Address: ${address}`}>
      <ChartsContainer
        charts={[
          {
            component: <AddressMetrics address={address} />,
            title: 'Fill Volume',
          },
        ]}
        css={`
          margin: 0 0 1.25em 0;

          ${media.greaterThan('lg')`
              margin: 0 0 2em 0;
            `}
        `}
        defaultPeriod={TIME_PERIOD.YEAR}
        periods={[
          { label: '24H', value: TIME_PERIOD.DAY },
          { label: '7D', value: TIME_PERIOD.WEEK },
          { label: '1M', value: TIME_PERIOD.MONTH },
          { label: '1Y', value: TIME_PERIOD.YEAR },
          { label: 'ALL', value: TIME_PERIOD.ALL },
        ]}
      />
      <Card css="flex-grow: 1;">
        <Fills filter={{ address }} />
      </Card>
    </PageLayout>
  </>
);

AddressPage.propTypes = {
  address: PropTypes.string.isRequired,
};

export default mapProps(({ match }) => ({
  address: match.params.address,
}))(AddressPage);
