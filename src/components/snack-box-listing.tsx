import React from "react";
import styled from "styled-components";
import AmazonButtonShop from "./amazon-button-shop";

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

const Tag = styled.small`
  display: inline-block;
  background: rgba(4, 204, 57, 0.3);
  border-radius: 10px;
  padding: 1px 8px;
  margin: 0px 10px;
  color: #3c9654;
`;

const Price = styled.div<{ slashed?: boolean }>`
  color: ${p => (p.slashed ? "#666" : "#04b534")};
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
      <Image src={data.Image[0].url} />
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
          <Tag>sale</Tag>
        </article>
      ) : (
        <Price>${data.Price}</Price>
      )}

      <small>{data.Availability}</small>
      {!isHolidaySeason && <AmazonButtonShop url={data.Link} />}
    </Wrapper>
  );
};

export default SnackBoxListing;
