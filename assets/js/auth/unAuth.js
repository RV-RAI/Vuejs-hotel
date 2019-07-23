export default function (val, role) {
  let a =  val.store.state.auth.token;
  val.$axios.setToken('Bearer ' + a);
  val.$axios.get('/' + role + '/account/me').catch(e => {
    if(e.response.status === 401) {
      return val.redirect('/server-error')
    }
  })
}
