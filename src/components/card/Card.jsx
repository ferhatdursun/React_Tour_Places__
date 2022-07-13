import "./Card.scss";

// !jsx içinde if/for loop kullanamazsınız
//!  if yerine ternary , döngü için map kullanabilirsiniz. if,for loop vs jsx dışında kullanabilirsiniz. map te süslü kullanacaksak return istiyor

const Card = ({ dataa }) => {
  console.log(dataa);

  return (
    <div className="container">
      {dataa.map((item) => {
        return (
          <div className="card" key={item.id}>
            <h1>{item.title}</h1>
            <div className="image_desc">
              <img className="img" src={item.image} alt="" />
              <p className="desc">{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
