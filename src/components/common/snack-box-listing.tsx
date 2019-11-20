import React from "react";
import styled from "styled-components";
import { AmazonShopButton } from "./amazon-shop-button";

const Wrapper = styled.article`
  padding: 10px;
  margin: 20px 0px;
  text-align: center;
`;

const Image = styled.img`
  width: ${p => (p.theme.screens.sm ? "100%" : "500px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-family: Alice;
  margin: 8px 0px;
  font-size: ${p => (p.theme.screens.sm ? "1.5rem" : "2rem")} 2rem;
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Price = styled.p<{ slashed?: boolean }>`
  color: ${p => (p.slashed ? "#666" : "inherit")};
  text-decoration: ${p => (p.slashed ? "line-through" : "none")};
  font-weight: bold;
  font-size: ${p => (p.slashed ? "16px" : "24px")};
  margin: 0px;
  padding: 0px;
  margin-right: ${p => (p.slashed ? "10px" : "0px")};
  font-family: Alice;
`;

const Availability = styled.small`
  font-family: Alice;
`;

type SnackBoxListingProps = {
  // TODO: Type this out!
  // eslint-disable-next-line
  data: any;
};

const SnackBoxListing: React.FC<SnackBoxListingProps> = ({ data }) => {
  const month = new Date().getMonth();
  const isHolidaySeason = [1, 2, 3, 4, 10, 11, 12].includes(month);
  const renderPrice = data.Sale_Price ? (
    <PriceWrapper>
      <Price slashed={true}>${data.Price}</Price>
      <Price>${data.Sale_Price}</Price>
    </PriceWrapper>
  ) : (
    <Price>${data.Price}</Price>
  );
  return (
    <Wrapper>
      <Image src={data.Image[0].url} alt={data.Name} />
      <Title>{data.Name}</Title>
      {renderPrice}
      <AmazonShopButton url={data.Link} isAvailable={isHolidaySeason} />
      <Availability>{data.Availability}</Availability>
    </Wrapper>
  );
};

export { SnackBoxListing };
