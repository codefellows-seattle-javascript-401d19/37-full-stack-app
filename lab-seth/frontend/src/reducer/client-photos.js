export const validatePhoto = (photo) => {
  if(!photo)
    throw new Error('A Photo is required')

  let {_id, url, description, owner} = photo
  if(!_id || !url || !description || !owner)
    throw new Error('Photo not valid')
}

export default(state = [], {type, payload}) => {
  switch(type){
    case 'CLIENT_PHOTOS_FETCH':
      if(!Array.isArray(payload))
        throw new Error('Client Photos must be in an Array')

      payload.forEach(validatePhoto)
      return payload

    case 'CLIENT_PHOTO_CREATE':
      validatePhoto(payload)
      return [payload,...state]

    case 'CLIENT_PHOTO_REMOVE':
      validatePhoto(payload)
      return state.filter(item => item._id !== payload._id)

    case 'TOKEN_REMOVE':
      return []
      
    default:
      return state
  }
}