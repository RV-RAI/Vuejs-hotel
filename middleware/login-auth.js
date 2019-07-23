export default function({ store, redirect }) {
  if (store.state.auth.user) {
    redirect("/client/price/kpi")
  }
}
