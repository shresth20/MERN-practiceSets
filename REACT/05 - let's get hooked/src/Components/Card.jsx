export const Card = ({ resData }) => (
    <div id="card">
      <div id="cardImg">
        <img src={resData.info.image.url} />
      </div>
      <h3>{resData.info.name}</h3>
      <h5>Rs.{resData.info.costText.text}</h5>
      <i>{resData.info.name}</i>
      <b>{resData.info.rating.rating_text}⭐</b>
      {/* {console.log(resData)} */}
    </div>
  );
  
  