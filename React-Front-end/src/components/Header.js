import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAddP, showAddP,onAddM, showAddM,onAddC, showAddC }) => {

  return (
    <header className='header'>
      <h1>{title}</h1>
        <Button
          color={showAddP ? 'red' : 'green'}
          text={showAddP ? 'Close' : 'Add Person'}
          onClick={onAddP}
        />
         <Button
          color={showAddM ? 'red' : 'green'}
          text={showAddM ? 'Close' : 'Add Movie'}
          onClick={onAddM}
        />
         <Button
          color={showAddC ? 'red' : 'green'}
          text={showAddC ? 'Close' : 'Add Connection'}
          onClick={onAddC}
        />
     
    </header>
  )
}

Header.defaultProps = {
  title: 'Movie Desk',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header