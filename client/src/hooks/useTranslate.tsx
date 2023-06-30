/**
 * @author Fadi Hanna <fhanna181@gmail.com>
 */

/**
 * Handle translations.
 *
 * @function useTranslation
 * @param { string } val
 * @param { string } lang
 * @example useTranslate("Start", "en");
 */
const useTranslate: React.FC<string> = (val: string, lang: string) => {
  let data;

  if (val) {
    data = require(`../translations/${lang}.json`);
  } else {
    data = require('../translations/en.json');
  }

  return data[val];
};

export default useTranslate;
