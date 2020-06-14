export const roomCategorys = (state = [{}], action) => {
	switch (action.type) {
		case 'ADD_ROOM_CATEGORYS':
			return action.roomCategorys
		default:
			return state
	}
}
