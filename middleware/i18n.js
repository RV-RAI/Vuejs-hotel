/*
 * 1. sets i18n.locale and state.locale if possible
 * 2. redirects if not with locale
 */
export default function ({
                           isHMR, app, store, route, params, error, redirect
                         }) {
  if (isHMR) { // ignore if called from hot module replacement
    return;
  } // if url does not have language, redirect to english
  // else if (!params.lang) {
  //   return redirect('/jp'+route.fullPath);
  // }
  // based on directory structure _lang/xxxx, en/about has params.lang as "en"
  const locale = params.lang || 'jp';
  store.commit('SET_LANG', locale); // set store
  app.i18n.locale = store.state.locale;
}
