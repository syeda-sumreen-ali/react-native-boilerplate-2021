import ICONS from "./icons";
import { IMAGES } from "./images";
import  { COLORS, SIZES, FONTS} from "./theme";
import {Dimensions} from 'react-native'

const {width, height}= Dimensions.get('screen');

const wp = widthPerc => {
	return width * widthPerc /100;
}

const hp = heightPerc => {
	return height * heightPerc/100;
}
export {
	IMAGES,
	ICONS,
	COLORS,
	SIZES,
	wp,
	hp,
	FONTS
};
