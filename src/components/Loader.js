// Just a simple "loading..." component

import React from 'react'
import { connect } from 'react-redux'

export const View = ({ status }) => (
  <div className={`loader ${status}`}>Loading...</div>
)

const mapStateToProps = (state) => {
    return {
        status: state.ui.isFetching
    }
}

const Loader = connect(
    mapStateToProps
)(View)

export default Loader