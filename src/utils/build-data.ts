const LOCALE = "sv-SE";
const DEFAULT_BUILD_VERSION = "SNAPSHOT";
const DEFAULT_BUILD_DATE = getAsBuildDateString(new Date());

function getBuildData(): [string, string] {
  let buildVersion: string;
  let buildDate: string;

  const buildVersionMeta = document.querySelector('meta[name="build-version"]');
  if (buildVersionMeta) {
    let content = buildVersionMeta.getAttribute("content");
    if (!(content && !content.includes("%"))) {
      // Use default if placeholder in place
      content = DEFAULT_BUILD_VERSION;
    }
    buildVersion = content;
  } else {
    buildVersion = DEFAULT_BUILD_VERSION;
  }

  const buildDateMeta = document.querySelector('meta[name="build-date"]');
  if (buildDateMeta) {
    let content = buildDateMeta.getAttribute("content");
    if (content && !content.includes("%")) {
      content = getAsBuildDateString(new Date(content));
    } else {
      content = DEFAULT_BUILD_DATE;
    }
    buildDate = content;
  } else {
    buildDate = DEFAULT_BUILD_DATE;
  }

  return [buildVersion, buildDate];
}

function getAsBuildDateString(date: Date): string {
  const dateString = date
    .toLocaleDateString(LOCALE, {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\D/g, ""); // remove all non-digits

  const timeString = date
    .toLocaleTimeString(LOCALE, { hour12: false })
    .replace(/\D/g, ""); // remove all non-digits

  return `${dateString}.${timeString}`;
}

export default getBuildData;
