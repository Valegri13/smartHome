import { combineReducers } from "redux";
import { devicesCategory } from './DevicesCategoryReducer';
import { roomCategorys } from './RoomCategoryReducer';
import { devices } from './DevicesReducer';

export  const allReducers = combineReducers({
	devicesCategory,
	roomCategorys,
	devices
})
