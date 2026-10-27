// Image
import one from "../assets/images/perfume.png"
function Image(){
  return(
    <div className="imgcontainer">
      <div className="imgbox">
        <img src={one} alt=""></img>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
      </div>
      <div className="imgbox">
        <img src={one} alt=""></img>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
      </div>
      <div className="imgbox">
        <img src={one} alt=""></img>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
      </div>
    </div>
  )
}
export default Image