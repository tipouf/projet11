import PropTypes from "prop-types"
import "./Layout.scss"
const Layout = ({ children }) => {
  return (
    <div className="layout">
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout