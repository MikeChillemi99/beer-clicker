const Button = ({ handleClickBeer }) => {

    return (
      <div>
        <button className="btn" onClick={handleClickBeer} style={{ backgroundColor: 'white', width: '120px', height: '120px', borderRadius: '50%', color: 'black', border: '2px solid black' }}><h3>Brasser</h3></button>
      </div>
    )
  }
  
export default Button
  

