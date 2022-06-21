import React from "react";
import Container from "../layout/Container";

const Price = () => {
  const price = [
    {
      head: "Hair Cut",
      list: [
        {
          name: "Kids",
          amount: "$19~",
        },
        {
          name: "Man",
          amount: "$30",
        },
        {
          name: "Woman",
          amount: "$40",
        },
      ],
    },
    {
      head: "Waxing",
      list: [
        {
          name: "Eyebrows / Upper lip / chin",
          amount: "$10",
        },
        {
          name: "Underarms",
          amount: "$15",
        },
        {
          name: "Upper / Lower arms",
          amount: "$19",
        },
        {
          name: "Full arm",
          amount: "$30",
        },
        {
          name: "Lower legs",
          amount: "$22",
        },
      ],
    },
    {
      head: "TINTING",
      list: [
        {
          name: "Eyebrows",
          amount: "$30",
        },
        {
          name: "Eyelashes",
          amount: "$30",
        },
        {
          name: "Manicure",
          amount: "$30",
        },
        {
          name: "Pedicure",
          amount: "$30",
        },
        {
          name: "European Facial",
          amount: "$30",
        },
      ],
    },
  ];

  return (
    <Container parentClass="price">
      <h1 className="text-center f64 text-white fw-bold">Price</h1>

      <div className="row gx-md-5 gy-5">
        {price.map((prev, i) => {
          return (
            <div key={i} className="col-12 col-sm-6 col-md-4">
              <h1 className="text-center">{prev.head}</h1>

              <ul className="list-unstyled mb-0">
                {prev.list.map((prev2, i) => {
                  return (
                    <li
                      key={i}
                      className="d-flex justify-content-between align-items-center mt-5"
                    >
                      <div className="d-flex align-items-center gap-4 p_">
                        <div></div>
                        <p className="f20 mb-0">{prev2.name}</p>
                      </div>
                      <p className="f20 mb-0">{prev2.amount}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="see_container d-flex justify-content-end">
        <button className="border-0">See the whole price</button>
      </div>
    </Container>
  );
};

export default Price;
