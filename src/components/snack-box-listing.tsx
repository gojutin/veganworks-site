import React from "react";
import styled from "styled-components";
import AmazonShopButton from "./amazon-shop-button";

const Wrapper = styled.article`
  padding: 10px;
  margin: 20px 0px;
  text-align: center;
`;

const Image = styled.img`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-family: Alice;
  margin: 8px 0px;
`;

const Price = styled.div<{ slashed?: boolean }>`
  color: ${p => (p.slashed ? "#666" : "#45a165")};
  text-decoration: ${p => (p.slashed ? "line-through" : "none")};
  font-weight: bold;
  font-size: ${p => (p.slashed ? "12px" : "30px")};
  margin-right: ${p => (p.slashed ? "10px" : "0px")};
`;

type SnackBoxListingProps = {
  data: any;
};

const SnackBoxListing: React.FC<SnackBoxListingProps> = ({ data }) => {
  const month = new Date().getMonth();
  const isHolidaySeason = [1, 2, 3, 4, 10, 11, 12].includes(month);
  return (
    <Wrapper>
      <Image src={data.Image[0].url} alt={data.Name} />
      <Title>{data.Name}</Title>
      {data.Sale_Price ? (
        <article
          css={`
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
          `}
        >
          <Price slashed>${data.Price}</Price>

          <Price>${data.Sale_Price}</Price>
        </article>
      ) : (
        <Price>${data.Price}</Price>
      )}

      <small>{data.Availability}</small>
      <AmazonShopButton url={data.Link} isAvailable={isHolidaySeason} />
    </Wrapper>
  );
};

export default SnackBoxListing;
