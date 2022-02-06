import React from "react";
import InputField from "../../ui/InputField/InputField";
import CustomLink from "../../ui/CustomLink/CustomLink";
import ProfileCircle from "../ProfileCircle/ProfileCircle";
import { HeaderWrapper } from "./styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <InputField placeholder="Search" />
      <CustomLink to="/">Explore</CustomLink>
      <CustomLink to="/create">Create</CustomLink>
      <ProfileCircle />
    </HeaderWrapper>
  );
};

export default Header;
