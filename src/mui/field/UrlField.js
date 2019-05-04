import React from 'react';
import PropTypes from 'prop-types';

const UrlField = ({ record = {}, source}) =>
    <a href={record[source]}>
        {record[source]}
    </a>;

    UrlField.propTypes = {
        record: propTypes.object,
        source: propTypes.string.isRequired,
    };

    export default UrlField;