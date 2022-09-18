import CustomInputNumber from "./CustomInputNumber";
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  margin-top: 0.5em;
  font-size: 16px;
  font-weight: bold;
`;

const SubText = styled.div`
  font-size: 15px;
  color: gray;
`;

const SingleRoomAllocation = ({
  allocation,
  lastRoom,
  index,
  disabled,
}) => {
  const totalGuest = useSelector((state) => state.guest.totalGuest);
  const guestArray = useSelector((state) => state.guest.guestArray);
  const currentRoomPeopleArray = guestArray?.map(
    (guest) => guest.adult + guest.child
  );
  const currentTotal =
    currentRoomPeopleArray?.length > 0
      ? currentRoomPeopleArray.reduce((a, b) => a + b)
      : room;

  const newArray = [];
  for (var i = 0; i <= guestArray.length - 1; i++) {
    if (i !== index) {
      newArray.push(guestArray[i]);
    }
  }

  const otherPeopleArray = newArray?.map((guest) => guest.adult + guest.child);
  const otherTotal = otherPeopleArray.reduce((a, b) => a + b);

  const logNameAndValue = (event) => {
    console.log(`Event.target.name :${event?.target?.name}`);
    console.log(`Event.target.value:${event?.target?.value}`);
  };
  const onChangeHandler = (event) => {
    if (event) {
      logNameAndValue(event);
    }
  };

  const onBlurHandler = (event) => {
    if (event) {
      logNameAndValue(event);
    }
  };

  const { adult, child } = allocation;
  const currentRoomTotal = adult + child;
  // 房間最大為四人房，max最大只給4
  const maxAdult =
    totalGuest - otherTotal - child > 4 ? 4 : totalGuest - otherTotal - child;
  const maxChild =
    totalGuest - otherTotal - adult > 4 ? 4 : totalGuest - otherTotal - adult;

  return (
    <>
      <Title>{`房間：${currentRoomTotal} 人`}</Title>
      <Container>
        <ColumnContainer>
          <Info>大人</Info>
          <SubText>年齡 20+</SubText>
        </ColumnContainer>

        <CustomInputNumber
          min={1}
          max={maxAdult}
          step={1}
          name={"adult-number-input"}
          value={adult}
          disabled={disabled}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          index={index}
          isChild={false}
        />
      </Container>
      <Container>
        <Info>小孩</Info>
        <CustomInputNumber
          min={0}
          max={maxChild}
          step={1}
          name={"child-number-input"}
          value={child}
          disabled={disabled}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          index={index}
          isChild={true}
        />
      </Container>
      {!lastRoom && <hr />}
    </>
  );
};

export default SingleRoomAllocation;
