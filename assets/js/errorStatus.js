export default function (error) {
  if (error.response.status == 500) {
    return 'Request timeout!'
  } else if (error.response.status == 404) {
    return 'Server not found!'
  } else if(error.response.status == 400 && error.response.data[0].dataPath == ".email") {
    return 'Please check email again!'
  } else if(error.response.status == 400 && error.response.data[0].dataPath == '.phone') {
    return 'Please check phone number again!'
  } else if(error.response.status == 400 && error.response.data[0].dataPath == '.organization') {
    return 'Please check organization again!'
  } else if(error.response.status == 400 && error.response.data[0].dataPath == '.address') {
    return 'Please check address again!'
  } else if(error.response.status == 400 && error.response.data[0].dataPath == '.password') {
    return 'Please check password again!'
  } else if(error.response.status == 409) {
    return '  '
  } else if(error.response.status == 410) {
    return 'Reset code was expired!'
  } else if(error.response.status == 401) {
    return 'Invalid email or password!'
  } else if(error.response) {
    return 'Invalid email or password!'
  } else if (error) {
    return 'Failed!'
  }
}
