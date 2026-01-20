import { router } from './router.ts';

const SETTINGS_KEY = "settings";

// settings for the whole website
// if any new persistent settings are needed,
// they are to be added to this class
type Settings = {
  mensaTimeStart: Date
};

const defaultSettings: Settings = {
  mensaTimeStart: new Date(0),
};

// the current settings
let settings: Settings
{
  const res = localStorage.getItem(SETTINGS_KEY);
  if (!res) {
    settings = defaultSettings;
  } else {
    try {
      settings = JSON.parse(res);
    } catch (e) {
      settings = defaultSettings;
    }
  }
}

export function LoadSettings(): Settings {
  return settings;
}

export function SaveSettings(sett: Settings): void {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(sett));
  settings = sett;
}

/**
 * Automatically redirects to the currently relevant page, if
 * that should be necessary
 *
 * @returns true, if a redirect has happened
*/
export function AutoRedirect(): boolean {
  let redirected = false;

  // redirect to mensatime
  // if (settings.playingMensatime) {
  //   router.replace('/mensatime');
  //   redirected = true;
  // }

  return redirected;
}
