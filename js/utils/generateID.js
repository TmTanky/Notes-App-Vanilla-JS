export const generateID = (length) => {
	if (length > 15) {
		throw Error('Length must be 15 below.')
	}
	const id = []
	const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*`
	for (let counter = 0; counter < length; counter++) {
		const randomCharacter = Math.floor(Math.random() * 69 + 1)
		id.push(characters[randomCharacter])
	}
	return id.join('')
}