import React from 'react';
import PropTypes from 'prop-types';
// Components
import TopRow from './components/TopRow';
import MidRow from './components/MidRow';
import BottomRow from './components/BottomRow';
// Helpers
import formatDate from '../../../helpers/formatDate';
// CSS
import styles from './item.css';

const ListItem = ({ item }) => {
  const arrivalDate = formatDate(item.dateArrival);
  return (
    <li className={styles.listItem}>
      <TopRow
        status={item.status}
        guestName={item.guestName}
        dateCreated={item.dateCreated}
        styles={styles}
      />
      <MidRow
        propertyId={item.propertyId}
        propertyName={item.propertyName}
        styles={styles.listMidRow}
      />
      <BottomRow
        arrivalDate={arrivalDate}
        styles={styles.listBottomRow}
        people={item.people}
      />
    </li>
  );
};

ListItem.propTypes = {
  item: PropTypes.shape({
    amountDue: PropTypes.number.isRequired,
    amountPaid: PropTypes.number.isRequired,
    currencyCode: PropTypes.string.isRequired,
    guestName: PropTypes.string,
    id: PropTypes.string,
    people: PropTypes.number.isRequired,
    propertyId: PropTypes.string.isRequired,
    propertyName: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
    replied: PropTypes.bool.isRequired,
    status: PropTypes.string.isRequired,
    totalAmount: PropTypes.number.isRequired,
  }),
};

export default ListItem;
