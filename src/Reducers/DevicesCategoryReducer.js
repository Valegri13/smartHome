export const devicesCategory = (state = [{}], action) => {
	switch (action.type) {
		case 'ADD_DEVICES_CATEGORY':
			return action.devicesCategory
		default:
			return state;
	}
}
