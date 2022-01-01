import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas en <GifGridItem />", () => {
  test("deve  mostrar el componente correctamente", () => {
    const wrapper = shallow(<GifGridItem />);
  });
});
