export const addDevices = devices => {
	return {
		type: 'ADD_DEVICES',
		devices
	}
}

export const addDevice = device => {
	return {
		type: 'ADD_DEVICE',
		device
	}
}

export const changeStatus = id => {
	return {
		type: 'CHANGE_STATUS',
		id
	}
}
