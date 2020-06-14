export const devices = (state = [], action) => {
	switch (action.type) {
		case 'ADD_DEVICES':
			return action.devices;
		case 'ADD_DEVICE':
			return [...state, action.device];
		case 'CHANGE_STATUS':
			state.find(item => item.id === action.id).status === 'active'
			? state.find(item => item.id === action.id).status = 'disabled'
			: state.find(item => item.id === action.id).status = 'active'
			return [...state]
		default:
			return state;
	}
}
